import { BuildHandler, BuildHandlerArguments } from "@aws-sdk/types";

export function acceptsHeader(next: BuildHandler<any, any>) {
  return async (args: BuildHandlerArguments<any, any>) => {
    return next({
      ...args,
      request: {
        ...args.request,
        headers: {
          ...args.request.headers,
          accepts: "application/json"
        }
      }
    });
  };
}
