// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListEventLogConfigurationsCommand,
  ListEventLogConfigurationsCommandInput,
  ListEventLogConfigurationsCommandOutput,
} from "../commands/ListEventLogConfigurationsCommand";
import { IoTManagedIntegrationsClient } from "../IoTManagedIntegrationsClient";
import { IoTManagedIntegrationsPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListEventLogConfigurations: (
  config: IoTManagedIntegrationsPaginationConfiguration,
  input: ListEventLogConfigurationsCommandInput,
  ...rest: any[]
) => Paginator<ListEventLogConfigurationsCommandOutput> = createPaginator<
  IoTManagedIntegrationsPaginationConfiguration,
  ListEventLogConfigurationsCommandInput,
  ListEventLogConfigurationsCommandOutput
>(IoTManagedIntegrationsClient, ListEventLogConfigurationsCommand, "NextToken", "NextToken", "MaxResults");
