import { LoadedConfigSelectors } from "@smithy/node-config-provider";

import { getArrayForCommaSeparatedString } from "../utils/getArrayForCommaSeparatedString";

const NODE_AUTH_SCHEME_PREFERENCE_ENV_KEY = "AWS_AUTH_SCHEME_PREFERENCE";
const NODE_AUTH_SCHEME_PREFERENCE_CONFIG_KEY = "auth_scheme_preference";

/**
 * @public
 */
export const NODE_AUTH_SCHEME_PREFERENCE_OPTIONS: LoadedConfigSelectors<string[]> = {
  /**
   * Retrieves auth scheme preference from environment variables
   * @param env - Node process environment object
   * @returns Array of auth scheme strings if preference is set, undefined otherwise
   */
  environmentVariableSelector: (env: NodeJS.ProcessEnv) => {
    if (!(NODE_AUTH_SCHEME_PREFERENCE_ENV_KEY in env)) return undefined;
    return getArrayForCommaSeparatedString(env[NODE_AUTH_SCHEME_PREFERENCE_ENV_KEY] as string);
  },

  /**
   * Retrieves auth scheme preference from config file
   * @param profile - Config profile object
   * @returns Array of auth scheme strings if preference is set, undefined otherwise
   */
  configFileSelector: (profile) => {
    if (!(NODE_AUTH_SCHEME_PREFERENCE_CONFIG_KEY in profile)) return undefined;
    return getArrayForCommaSeparatedString(profile[NODE_AUTH_SCHEME_PREFERENCE_CONFIG_KEY] as string);
  },

  /**
   * Default auth scheme preference if not specified in environment or config
   */
  default: [],
};
