import {
  BuildHandler,
  BuildHandlerArguments,
  BuildMiddleware,
  MetadataBearer,
  UrlParser,
  HandlerExecutionContext,
  QueryParameterBag
} from "@aws-sdk/types";

const PATH_PARAMETER_PATTERN = /\{[^\}]+\}/;
const GREEDY_PATH_PARAMETER_PATTERN = /\{[^\}]+\+\}/;

export function modeledEndpointMiddleware<InputType extends object>(
  urlParser: UrlParser,
  inputKey: keyof InputType
): BuildMiddleware<InputType, any, any> {
  return <Input extends InputType, Output extends MetadataBearer>(
    next: BuildHandler<Input, Output, any>,
    {
      model: {
        http: { requestUri }
      }
    }: HandlerExecutionContext
  ): BuildHandler<Input, Output, any> => async ({
    request,
    input,
    ...rest
  }: BuildHandlerArguments<Input, any>): Promise<Output> => {
    const endpoint = urlParser(input[inputKey] as any);
    let [pathPattern] = requestUri.split("?");
    const pathMatch = request.path.match(
      new RegExp(
        pathPattern
          .split("/")
          .map(pathEl =>
            GREEDY_PATH_PARAMETER_PATTERN.test(pathEl)
              ? ".+"
              : PATH_PARAMETER_PATTERN.test(pathEl)
              ? "[^\\\\/]+"
              : pathEl
          )
          .join("/") + "$"
      )
    );
    if (pathMatch) {
      endpoint.path += pathMatch[0];
    }

    return next({
      ...rest,
      input,
      request: {
        ...request,
        ...endpoint
      }
    });
  };
}
