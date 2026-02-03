import { HttpRequest } from "@smithy/protocol-http";
import {
  BuildHandler,
  BuildHandlerArguments,
  BuildHandlerOptions,
  BuildHandlerOutput,
  BuildMiddleware,
  MetadataBearer,
} from "@smithy/types";

import { PreviouslyResolved } from "./configurations";

export function addGlacierApiVersionMiddleware(options: PreviouslyResolved): BuildMiddleware<any, any> {
  return <Output extends MetadataBearer>(next: BuildHandler<any, Output>): BuildHandler<any, Output> =>
    async (args: BuildHandlerArguments<any>): Promise<BuildHandlerOutput<Output>> => {
      const request = args.request;
      if (HttpRequest.isInstance(request)) {
        request.headers["x-amz-glacier-version"] = options.apiVersion;
      }

      return next({
        ...args,
        request,
      });
    };
}

export const addGlacierApiVersionMiddlewareOptions: BuildHandlerOptions = {
  step: "build",
  tags: ["SET_GLACIER_VERSION"],
  name: "addGlacierApiVersionMiddleware",
  override: true,
};
