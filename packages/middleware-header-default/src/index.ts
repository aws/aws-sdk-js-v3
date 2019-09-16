import {
  BuildHandler,
  BuildHandlerArguments,
  BuildMiddleware,
  HttpRequest
} from "@aws-sdk/types";

export interface HeaderDefaultArgs {
  [header: string]: string;
}

export function headerDefault(
  headerBag: HeaderDefaultArgs
): BuildMiddleware<any, any> {
  return (next: BuildHandler<any, any>) => {
    return (args: BuildHandlerArguments<any>) => {
      const headers = { ...(args.request as HttpRequest).headers };

      for (const name of Object.keys(headerBag)) {
        if (!(name in headers)) {
          headers[name] = headerBag[name];
        }
      }

      return next({
        ...args,
        request: {
          ...args.request,
          headers
        }
      });
    };
  };
}
