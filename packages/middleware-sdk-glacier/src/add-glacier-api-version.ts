import {
  BuildHandler,
  BuildHandlerArguments,
  BuildHandlerOptions,
  BuildHandlerOutput,
  BuildMiddleware,
  MetadataBearer,
  Pluggable
} from "@aws-sdk/types";
import { HttpRequest } from "@aws-sdk/protocol-http";

export function addGlacierApiVersionMiddleware(): BuildMiddleware<any, any> {
  return <Output extends MetadataBearer>(
    next: BuildHandler<any, Output>
  ): BuildHandler<any, Output> => async (
    args: BuildHandlerArguments<any>
  ): Promise<BuildHandlerOutput<Output>> => {
    let request = args.request;
    if (HttpRequest.isInstance(request)) {
      request.headers["x-amz-glacier-version"] = "2012-06-01";
    }

    return next({
      ...args,
      request
    });
  };
}

export const addGlacierApiVersionOptions: BuildHandlerOptions = {
  step: "build",
  tags: ["SET_CONTENT_LENGTH", "CONTENT_LENGTH"],
  name: "contentLengthMiddleware"
};

export const getAddGlacierApiVersionPlugin = (): Pluggable<any, any> => ({
  applyToStack: clientStack => {
    clientStack.add(
      addGlacierApiVersionMiddleware(),
      addGlacierApiVersionOptions
    );
  }
});
