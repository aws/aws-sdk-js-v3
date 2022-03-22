import { normalizeProvider } from "@aws-sdk/util-middleware";

import { SigV4AuthInputConfig, SigV4AuthPreviouslyResolved, SigV4AuthResolvedConfig } from "./configurations";
import { getSigV4Signer } from "./utils/getSigV4Signer";
import { resolveAuthConfig } from "./utils/resolveAuthConfig";

export const resolveSigV4AuthConfig = <T>(
  input: T & SigV4AuthInputConfig & SigV4AuthPreviouslyResolved
): T & SigV4AuthResolvedConfig => {
  const authConfig = resolveAuthConfig(input);
  return {
    ...input,
    ...authConfig,
    signer: input.signer
      ? // if signer is supplied by user, normalize it to a function returning a promise for signer.
        normalizeProvider(input.signer)
      : getSigV4Signer(authConfig.credentials, {
          region: input.region,
          service: input.signingName,
          sha256: input.sha256,
          uriEscapePath: input.signingEscapePath || true,
        }),
  };
};
