import { type LoadedConfigSelectors, booleanSelector, SelectorType } from "@smithy/core/config";

/**
 * @internal
 */
export const ENV_DISABLE_CLOCK_SKEW_CORRECTION = "AWS_DISABLE_CLOCK_SKEW_CORRECTION";

/**
 * @internal
 */
export const CONFIG_DISABLE_CLOCK_SKEW_CORRECTION = "disable_clock_skew_correction";

/**
 * @internal
 */
export const NODE_DISABLE_CLOCK_SKEW_CORRECTION_CONFIG_OPTIONS: LoadedConfigSelectors<boolean> = {
  environmentVariableSelector: (env: NodeJS.ProcessEnv) =>
    booleanSelector(env, ENV_DISABLE_CLOCK_SKEW_CORRECTION, SelectorType.ENV),
  configFileSelector: (profile) => booleanSelector(profile, CONFIG_DISABLE_CLOCK_SKEW_CORRECTION, SelectorType.CONFIG),
  default: false,
};
