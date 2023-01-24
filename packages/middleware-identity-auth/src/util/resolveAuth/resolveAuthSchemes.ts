import { AuthScheme, HandlerExecutionContext } from "@aws-sdk/types";

import { SUPPORTED_AUTH_SCHEMES } from "../../supported";

/**
 * @internal
 */
export interface ResolveAuthSchemesOptions {
  context: HandlerExecutionContext;
}

/**
 * @internal
 */
export const resolveAuthSchemes = async (options: ResolveAuthSchemesOptions): Promise<AuthScheme[]> => {
  const supportedAuthSchemes = options.context.authSchemes.filter(
    (authScheme) => SUPPORTED_AUTH_SCHEMES[authScheme.name]
  );
  return supportedAuthSchemes.map((authScheme) => {
    return {
      ...authScheme,
      ...SUPPORTED_AUTH_SCHEMES[authScheme.name],
    };
  });
};
