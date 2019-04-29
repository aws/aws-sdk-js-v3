import { EnvConfiguration, fromEnv } from "./fromEnv";
import {
  SharedConfigInit,
  fromSharedConfigFiles
} from "./fromSharedConfigFiles";
import { chain, memoize } from "@aws-sdk/property-provider";
import { Provider } from "@aws-sdk/types";

export type RegionProviderConfiguration = EnvConfiguration & SharedConfigInit;

export function defaultProvider(
  configuration: RegionProviderConfiguration = {}
): Provider<string> {
  return memoize(
    chain(fromEnv(configuration), fromSharedConfigFiles(configuration))
  );
}
