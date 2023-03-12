import { TokenIdentityProvider } from "@aws-sdk/types";
import { normalizeIdentityProvider } from "@aws-sdk/util-auth";

import { TokenInputConfig, TokenResolvedConfig } from "./configurations";
import { tokenDefaultProvider } from "./tokenDefaultProvider";

/**
 * @internal
 */
export const resolveTokenConfig = <T>(input: T & TokenInputConfig): T & TokenResolvedConfig => {
  let identity: TokenIdentityProvider | undefined = undefined;
  // Load from token for backwards compatibility
  if (input.token !== undefined) {
    identity = normalizeIdentityProvider(input.token);
  }
  // Load from identity if available and if token is not loaded
  if (identity === undefined && input.identity !== undefined) {
    // Will be checked in middleware to see if identity resolves to TokenIdentity
    identity = normalizeIdentityProvider(input.identity) as TokenIdentityProvider;
  }
  // Use default token provider if token is not loaded
  if (identity === undefined) {
    identity = tokenDefaultProvider(input as any);
  }
  return {
    ...input,
    identity,
    token: identity,
  };
};
