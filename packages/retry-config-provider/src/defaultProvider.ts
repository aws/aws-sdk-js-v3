import { EnvConfiguration, fromEnv } from "./fromEnv";
import {
  SharedConfigInit,
  fromSharedConfigFiles
} from "./fromSharedConfigFiles";
import { chain, memoize } from "@aws-sdk/property-provider";
import { Provider } from "@aws-sdk/types";

export type RetryConfigProviderConfiguration = EnvConfiguration &
  SharedConfigInit;

export const defaultProvider = (
  configuration: RetryConfigProviderConfiguration = {}
): Provider<string> =>
  memoize(chain(fromEnv(), fromSharedConfigFiles(configuration)));
