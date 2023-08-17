// smithy-typescript generated code
import { getDefaultClientConfiguration, resolveDefaultRuntimeConfig } from "@smithy/types";

import { TimestreamWriteClientConfiguration } from "./clientConfiguration";

/**
 * @public
 */
export interface RuntimeExtension {
  configureClient(clientConfiguration: TimestreamWriteClientConfiguration): void;
}

/**
 * @public
 */
export interface RuntimeExtensionsConfig {
  extensions: RuntimeExtension[];
}

const asPartial = <T extends Partial<TimestreamWriteClientConfiguration>>(t: T) => t;

/**
 * @internal
 */
export const resolveRuntimeExtensions = (runtimeConfig: any, extensions: RuntimeExtension[]) => {
  const clientConfiguration: TimestreamWriteClientConfiguration = {
    ...asPartial(getDefaultClientConfiguration(runtimeConfig)),
  };

  extensions.forEach((extension) => extension.configureClient(clientConfiguration));

  return {
    ...runtimeConfig,
    ...resolveDefaultRuntimeConfig(clientConfiguration),
  };
};
