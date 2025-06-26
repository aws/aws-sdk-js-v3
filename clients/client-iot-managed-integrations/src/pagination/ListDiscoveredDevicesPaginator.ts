// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import { Paginator } from "@smithy/types";

import {
  ListDiscoveredDevicesCommand,
  ListDiscoveredDevicesCommandInput,
  ListDiscoveredDevicesCommandOutput,
} from "../commands/ListDiscoveredDevicesCommand";
import { IoTManagedIntegrationsClient } from "../IoTManagedIntegrationsClient";
import { IoTManagedIntegrationsPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListDiscoveredDevices: (
  config: IoTManagedIntegrationsPaginationConfiguration,
  input: ListDiscoveredDevicesCommandInput,
  ...rest: any[]
) => Paginator<ListDiscoveredDevicesCommandOutput> = createPaginator<
  IoTManagedIntegrationsPaginationConfiguration,
  ListDiscoveredDevicesCommandInput,
  ListDiscoveredDevicesCommandOutput
>(IoTManagedIntegrationsClient, ListDiscoveredDevicesCommand, "NextToken", "NextToken", "MaxResults");
