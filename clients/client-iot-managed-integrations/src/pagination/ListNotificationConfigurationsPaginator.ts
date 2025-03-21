// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import { Paginator } from "@smithy/types";

import {
  ListNotificationConfigurationsCommand,
  ListNotificationConfigurationsCommandInput,
  ListNotificationConfigurationsCommandOutput,
} from "../commands/ListNotificationConfigurationsCommand";
import { IoTManagedIntegrationsClient } from "../IoTManagedIntegrationsClient";
import { IoTManagedIntegrationsPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListNotificationConfigurations: (
  config: IoTManagedIntegrationsPaginationConfiguration,
  input: ListNotificationConfigurationsCommandInput,
  ...rest: any[]
) => Paginator<ListNotificationConfigurationsCommandOutput> = createPaginator<
  IoTManagedIntegrationsPaginationConfiguration,
  ListNotificationConfigurationsCommandInput,
  ListNotificationConfigurationsCommandOutput
>(IoTManagedIntegrationsClient, ListNotificationConfigurationsCommand, "NextToken", "NextToken", "MaxResults");
