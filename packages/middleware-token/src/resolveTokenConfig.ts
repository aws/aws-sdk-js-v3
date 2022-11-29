import { TokenInputConfig, TokenResolvedConfig } from "./configurations";
import { normalizeTokenProvider } from "./normalizeTokenProvider";
import { tokenDefaultProvider } from "./tokenDefaultProvider";

export const resolveTokenConfig = <T>(input: T & TokenInputConfig): T & TokenResolvedConfig => ({
  ...input,
  token: input.token ? normalizeTokenProvider(input.token) : tokenDefaultProvider(input as any),
});
