import { HttpRequest } from "@aws-sdk/protocol-http";
import {
  BuildHandler,
  BuildHandlerArguments,
  BuildHandlerOptions,
  BuildHandlerOutput,
  BuildMiddleware,
  MetadataBearer,
  Pluggable,
} from "@aws-sdk/types";

import { ResolvedPredictEndpointMiddlewareConfig } from "./configurations";

export function predictEndpointMiddleware(options: ResolvedPredictEndpointMiddlewareConfig): BuildMiddleware<any, any> {
  return <Output extends MetadataBearer>(next: BuildHandler<any, Output>): BuildHandler<any, Output> => async (
    args: BuildHandlerArguments<any>
  ): Promise<BuildHandlerOutput<Output>> => {
    const { input } = args;
    let { request } = args;
    if (HttpRequest.isInstance(request)) {
      if (input.PredictEndpoint) {
        const endpoint = options.urlParser(input.PredictEndpoint);
        request = {
          ...request,
          hostname: endpoint.hostname,
          path: endpoint.path,
          port: endpoint.port,
          protocol: endpoint.protocol,
          query: endpoint.query,
        };
      }
    }
    return next({
      ...args,
      request,
    });
  };
}

export const predictEndpointMiddlewareOptions: BuildHandlerOptions = {
  step: "build",
  tags: ["PREDICT_ENDPOINT"],
  name: "predictEndpointMiddleware",
  override: true,
};

export const getPredictEndpointPlugin = (config: ResolvedPredictEndpointMiddlewareConfig): Pluggable<any, any> => ({
  applyToStack: (clientStack) => {
    clientStack.add(predictEndpointMiddleware(config), predictEndpointMiddlewareOptions);
  },
});
