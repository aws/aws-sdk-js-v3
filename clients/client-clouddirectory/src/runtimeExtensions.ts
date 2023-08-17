// smithy-typescript generated code
import { getDefaultClientConfiguration, resolveDefaultRuntimeConfig } from "@smithy/types";

import { CloudDirectoryClientConfiguration } from "./clientConfiguration";

/**
 * @public
 */
export interface RuntimeExtension {
  configureClient(clientConfiguration: CloudDirectoryClientConfiguration): void;
}

/**
 * @public
 */
export interface RuntimeExtensionsConfig {
  extensions: RuntimeExtension[];
}

const asPartial = <T extends Partial<CloudDirectoryClientConfiguration>>(t: T) => t;

/**
 * @internal
 */
export const resolveRuntimeExtensions = (runtimeConfig: any, extensions: RuntimeExtension[]) => {
  const clientConfiguration: CloudDirectoryClientConfiguration = {
    ...asPartial(getDefaultClientConfiguration(runtimeConfig)),
  };

  extensions.forEach((extension) => extension.configureClient(clientConfiguration));

  return {
    ...runtimeConfig,
    ...resolveDefaultRuntimeConfig(clientConfiguration),
  };
};
