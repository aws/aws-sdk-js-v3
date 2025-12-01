// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListCloudConnectorsCommand,
  ListCloudConnectorsCommandInput,
  ListCloudConnectorsCommandOutput,
} from "../commands/ListCloudConnectorsCommand";
import { IoTManagedIntegrationsClient } from "../IoTManagedIntegrationsClient";
import { IoTManagedIntegrationsPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListCloudConnectors: (
  config: IoTManagedIntegrationsPaginationConfiguration,
  input: ListCloudConnectorsCommandInput,
  ...rest: any[]
) => Paginator<ListCloudConnectorsCommandOutput> = createPaginator<
  IoTManagedIntegrationsPaginationConfiguration,
  ListCloudConnectorsCommandInput,
  ListCloudConnectorsCommandOutput
>(IoTManagedIntegrationsClient, ListCloudConnectorsCommand, "NextToken", "NextToken", "MaxResults");
