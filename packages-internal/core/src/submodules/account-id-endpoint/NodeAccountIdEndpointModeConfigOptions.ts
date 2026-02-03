import { LoadedConfigSelectors } from "@smithy/node-config-provider";

import {
  AccountIdEndpointMode,
  DEFAULT_ACCOUNT_ID_ENDPOINT_MODE,
  validateAccountIdEndpointMode,
} from "./AccountIdEndpointModeConstants";

const err = "Invalid AccountIdEndpointMode value";

const _throw = (message: string): never => {
  throw new Error(message);
};

/**
 * @internal
 */
export const ENV_ACCOUNT_ID_ENDPOINT_MODE = "AWS_ACCOUNT_ID_ENDPOINT_MODE";

/**
 * @internal
 */
export const CONFIG_ACCOUNT_ID_ENDPOINT_MODE = "account_id_endpoint_mode";

/**
 * @internal
 */
export const NODE_ACCOUNT_ID_ENDPOINT_MODE_CONFIG_OPTIONS: LoadedConfigSelectors<AccountIdEndpointMode> = {
  environmentVariableSelector: (env) => {
    const value = env[ENV_ACCOUNT_ID_ENDPOINT_MODE];
    if (value && !validateAccountIdEndpointMode(value)) {
      _throw(err);
    }
    return value as AccountIdEndpointMode;
  },
  configFileSelector: (profile) => {
    const value = profile[CONFIG_ACCOUNT_ID_ENDPOINT_MODE];
    if (value && !validateAccountIdEndpointMode(value)) {
      _throw(err);
    }
    return value as AccountIdEndpointMode;
  },
  default: DEFAULT_ACCOUNT_ID_ENDPOINT_MODE,
};
