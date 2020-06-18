import { fromEnv } from "./fromEnv";
import {
  SharedConfigInit,
  fromSharedConfigFiles
} from "./fromSharedConfigFiles";
import { chain, memoize } from "@aws-sdk/property-provider";
import { Provider } from "@aws-sdk/types";

export const ENV_MAX_ATTEMPTS = "AWS_MAX_ATTEMPTS";
export const CONFIG_MAX_ATTEMPTS = "max_attempts";

export const maxAttemptsProvider = (
  configuration: SharedConfigInit = {}
): Provider<string> =>
  memoize(
    chain(
      fromEnv(ENV_MAX_ATTEMPTS),
      fromSharedConfigFiles(configuration, CONFIG_MAX_ATTEMPTS)
    )
  );
