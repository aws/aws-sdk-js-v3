import { getSmithyContext } from "@smithy/core/client";
import type {
  HandlerExecutionContext,
  HttpAuthOption,
  HttpAuthSchemeParameters,
  HttpAuthSchemeParametersProvider,
  HttpAuthSchemeProvider,
} from "@smithy/types";

/**
 * The auth scheme parameters provider.
 *
 * @internal
 */
export const authSchemeParametersProvider: HttpAuthSchemeParametersProvider<
  any,
  HandlerExecutionContext,
  HttpAuthSchemeParameters,
  object
> = async (config: any, context: HandlerExecutionContext, input: object): Promise<HttpAuthSchemeParameters> => {
  return {
    operation: getSmithyContext(context).operation as string,
  };
};

/**
 * The default auth scheme provider.
 *
 * @internal
 */
export const authSchemeProvider: HttpAuthSchemeProvider<HttpAuthSchemeParameters> = () => {
  const options: HttpAuthOption[] = [{ schemeId: "smithy.api#noAuth" }];
  return options;
};
