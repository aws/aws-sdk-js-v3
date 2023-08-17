// smithy-typescript generated code
import { getDefaultClientConfiguration, resolveDefaultRuntimeConfig } from "@smithy/types";

import { ECRPUBLICClientConfiguration } from "./clientConfiguration";

/**
 * @public
 */
export interface RuntimeExtension {
  configureClient(clientConfiguration: ECRPUBLICClientConfiguration): void;
}

/**
 * @public
 */
export interface RuntimeExtensionsConfig {
  extensions: RuntimeExtension[];
}

const asPartial = <T extends Partial<ECRPUBLICClientConfiguration>>(t: T) => t;

/**
 * @internal
 */
export const resolveRuntimeExtensions = (runtimeConfig: any, extensions: RuntimeExtension[]) => {
  const clientConfiguration: ECRPUBLICClientConfiguration = {
    ...asPartial(getDefaultClientConfiguration(runtimeConfig)),
  };

  extensions.forEach((extension) => extension.configureClient(clientConfiguration));

  return {
    ...runtimeConfig,
    ...resolveDefaultRuntimeConfig(clientConfiguration),
  };
};
