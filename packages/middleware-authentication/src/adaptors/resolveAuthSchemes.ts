import { AuthScheme, HandlerExecutionContext } from "@aws-sdk/types";

import { SUPPORTED_AUTH_SCHEMES_MAP } from "../supportedAuth";

/**
 * TODO(identityandauth)
 */
/**
 * @internal
 */
export interface ResolveAuthSchemesOptions {
  context: HandlerExecutionContext;
}

/**
 * TODO(identityandauth)
 */
/**
 * @internal
 */
export const resolveAuthSchemes = async (options: ResolveAuthSchemesOptions): Promise<AuthScheme[]> => {
  const supportedAuthSchemes = options.context.authSchemes.filter(
    (authScheme) => SUPPORTED_AUTH_SCHEMES_MAP[authScheme.name]
  );
  return supportedAuthSchemes.map((authScheme) => {
    return {
      ...authScheme,
      ...SUPPORTED_AUTH_SCHEMES_MAP[authScheme.name],
    };
  });
};
