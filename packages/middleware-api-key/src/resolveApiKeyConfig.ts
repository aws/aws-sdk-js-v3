import { Provider, TokenIdentity } from "@aws-sdk/types";
import { MemoizedIdentityProvider, normalizeIdentityProvider } from "@aws-sdk/util-identity-auth";

import { ApiKeyInputConfig, ApiKeyPreviouslyResolved, ApiKeyResolvedConfig } from "./configurations";

// We have to provide a resolve function when we have config, even if it doesn't
// actually do anything to the input value. "If any of inputConfig, resolvedConfig,
// or resolveFunction are set, then all of inputConfig, resolvedConfig, and
// resolveFunction must be set."
export const resolveApiKeyConfig = <T>(
  input: T & ApiKeyPreviouslyResolved & ApiKeyInputConfig
): T & ApiKeyResolvedConfig => {
  let identityProvider: MemoizedIdentityProvider<TokenIdentity> | undefined = undefined;
  if (input.apiKey !== undefined) {
    if (typeof input.apiKey === "function") {
      identityProvider = normalizeIdentityProvider(
        async () =>
          ({
            token: await (input.apiKey as Provider<string>)(),
          } as TokenIdentity)
      );
    } else {
      identityProvider = normalizeIdentityProvider({
        token: input.apiKey,
      } as TokenIdentity);
    }
  }
  if (identityProvider === undefined && input.identity !== undefined) {
    identityProvider = normalizeIdentityProvider(input.identity);
  }
  return {
    ...input,
    identity: identityProvider,
  };
};
