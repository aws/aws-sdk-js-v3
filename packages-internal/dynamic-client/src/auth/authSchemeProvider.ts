import { getSmithyContext } from "@smithy/core/client";
import type {
  HandlerExecutionContext,
  HttpAuthOption,
  HttpAuthSchemeParameters,
  HttpAuthSchemeParametersProvider,
  HttpAuthSchemeProvider,
} from "@smithy/types";

/**
 * The auth scheme parameters provider. It surfaces the operation name from the
 * smithy context so that per-operation auth could be derived; at this checkpoint
 * all operations resolve to NoAuth.
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
 * The default auth scheme provider. Without model auth traits, every operation
 * resolves to `smithy.api#noAuth`.
 *
 * @internal
 */
export const authSchemeProvider: HttpAuthSchemeProvider<HttpAuthSchemeParameters> = () => {
  const options: HttpAuthOption[] = [{ schemeId: "smithy.api#noAuth" }];
  return options;
};
