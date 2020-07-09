import { chain, memoize } from "@aws-sdk/property-provider";
import { Provider } from "@aws-sdk/types";

import { EnvConfiguration, fromEnv } from "./fromEnv";
import { fromSharedConfigFiles, SharedConfigInit } from "./fromSharedConfigFiles";

export type RegionProviderConfiguration = EnvConfiguration & SharedConfigInit;

export const defaultProvider = (configuration: RegionProviderConfiguration = {}): Provider<string> =>
  memoize(chain(fromEnv(configuration), fromSharedConfigFiles(configuration)));
