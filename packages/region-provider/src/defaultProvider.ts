import { EnvConfiguration, fromEnv } from "./fromEnv";
import { SharedConfigInit, fromSharedConfigFiles } from "./fromSharedConfigFiles";
import { chain, memoize } from "@aws-sdk/property-provider";
import { Provider } from "@aws-sdk/types";

export type RegionProviderConfiguration = EnvConfiguration & SharedConfigInit;

export const defaultProvider = (configuration: RegionProviderConfiguration = {}): Provider<string> =>
  memoize(chain(fromEnv(configuration), fromSharedConfigFiles(configuration)));
