import { HttpRequest } from "@aws-sdk/protocol-http";
import {
  BuildHandler,
  BuildHandlerArguments,
  BuildHandlerOptions,
  BuildHandlerOutput,
  BuildMiddleware,
  Endpoint,
  MetadataBearer,
  Pluggable,
  Provider,
} from "@aws-sdk/types";

export function useRegionalEndpointMiddleware(config: {
  region: Provider<string>;
  endpoint: Provider<Endpoint>;
}): BuildMiddleware<any, any> {
  return <Output extends MetadataBearer>(next: BuildHandler<any, Output>): BuildHandler<any, Output> => async (
    args: BuildHandlerArguments<any>
  ): Promise<BuildHandlerOutput<Output>> => {
    const { request } = args;
    if (HttpRequest.isInstance(request) && request.hostname === "s3.amazonaws.com") {
      request.hostname = "s3.us-east-1.amazonaws.com";
    }
    return next({ ...args });
  };
}

export const useRegionalEndpointMiddlewareOptions: BuildHandlerOptions = {
  step: "build",
  tags: ["USE_REGIONAL_ENDPOINT", "S3"],
  name: "useRegionalEndpointMiddleware",
};

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const getUseRegionalEndpointPlugin = (unused: any): Pluggable<any, any> => ({
  applyToStack: (clientStack) => {
    clientStack.add(useRegionalEndpointMiddleware(), useRegionalEndpointMiddlewareOptions);
  },
});
