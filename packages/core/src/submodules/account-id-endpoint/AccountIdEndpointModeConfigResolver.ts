import { Provider } from "@smithy/types";
import { normalizeProvider } from "@smithy/util-middleware";

import {
  AccountIdEndpointMode,
  DEFAULT_ACCOUNT_ID_ENDPOINT_MODE,
  validateAccountIdEndpointMode,
} from "./AccountIdEndpointModeConstants";

/**
 * @public
 */
export interface AccountIdEndpointModeInputConfig {
  /**
   * The account ID endpoint mode to use.
   */
  accountIdEndpointMode?: AccountIdEndpointMode | Provider<AccountIdEndpointMode>;
}

/**
 * @internal
 */
interface PreviouslyResolved {}

/**
 * @internal
 */
export interface AccountIdEndpointModeResolvedConfig {
  accountIdEndpointMode: Provider<AccountIdEndpointMode>;
}

/**
 * @internal
 */
export const resolveAccountIdEndpointModeConfig = <T>(
  input: T & AccountIdEndpointModeInputConfig & PreviouslyResolved
): T & AccountIdEndpointModeResolvedConfig => {
  const { accountIdEndpointMode } = input;
  const accountIdEndpointModeProvider = normalizeProvider(accountIdEndpointMode ?? DEFAULT_ACCOUNT_ID_ENDPOINT_MODE);
  return Object.assign(input, {
    accountIdEndpointMode: async () => {
      const accIdMode = await accountIdEndpointModeProvider();
      if (!validateAccountIdEndpointMode(accIdMode)) {
        throw new Error(
          `Invalid value for accountIdEndpointMode: ${accIdMode}. Valid values are: "required", "preferred", "disabled".`
        );
      }
      return accIdMode;
    },
  });
};
