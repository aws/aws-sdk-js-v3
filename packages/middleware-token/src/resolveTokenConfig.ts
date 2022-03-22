import { TokenInputConfig, TokenPreviouslyResolved, TokenResolvedConfig } from "./configurations";
import { normalizeTokenProvider } from "./normalizeTokenProvider";

export const resolveTokenConfig = <T>(
  input: T & TokenInputConfig & TokenPreviouslyResolved
): T & TokenResolvedConfig => ({
  ...input,
  token: input.token ? normalizeTokenProvider(input.token) : input.tokenDefaultProvider(input as any),
});
