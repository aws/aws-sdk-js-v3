// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListDeviceDiscoveriesCommand,
  ListDeviceDiscoveriesCommandInput,
  ListDeviceDiscoveriesCommandOutput,
} from "../commands/ListDeviceDiscoveriesCommand";
import { IoTManagedIntegrationsClient } from "../IoTManagedIntegrationsClient";
import { IoTManagedIntegrationsPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListDeviceDiscoveries: (
  config: IoTManagedIntegrationsPaginationConfiguration,
  input: ListDeviceDiscoveriesCommandInput,
  ...rest: any[]
) => Paginator<ListDeviceDiscoveriesCommandOutput> = createPaginator<
  IoTManagedIntegrationsPaginationConfiguration,
  ListDeviceDiscoveriesCommandInput,
  ListDeviceDiscoveriesCommandOutput
>(IoTManagedIntegrationsClient, ListDeviceDiscoveriesCommand, "NextToken", "NextToken", "MaxResults");
