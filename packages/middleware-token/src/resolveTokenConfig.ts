import { TokenInputConfig, TokenResolvedConfig } from "./configurations";
import { normalizeTokenProvider } from "./normalizeTokenProvider";
import { tokenDefaultProvider } from "./tokenDefaultProvider";

/**
 * @internal
 */
export const resolveTokenConfig = <T>(input: T & TokenInputConfig): T & TokenResolvedConfig => {
  const { token } = input;
  return Object.assign(input, {
    token: token ? normalizeTokenProvider(token) : tokenDefaultProvider(input as any),
  });
};
