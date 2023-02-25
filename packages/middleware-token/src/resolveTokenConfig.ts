import { normalizeIdentityProvider } from "@aws-sdk/util-identity-auth";

import { TokenInputConfig, TokenResolvedConfig } from "./configurations";
import { tokenDefaultProvider } from "./tokenDefaultProvider";

export const resolveTokenConfig = <T>(input: T & TokenInputConfig): T & TokenResolvedConfig => {
  // Use deprecated token over identity
  if (input.token !== undefined) {
    input.identity = input.token;
  }
  return {
    ...input,
    identity: input.identity ? normalizeIdentityProvider(input.identity) : tokenDefaultProvider(input as any),
  };
};
