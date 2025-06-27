// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import { Paginator } from "@smithy/types";

import {
  ListOtaTaskConfigurationsCommand,
  ListOtaTaskConfigurationsCommandInput,
  ListOtaTaskConfigurationsCommandOutput,
} from "../commands/ListOtaTaskConfigurationsCommand";
import { IoTManagedIntegrationsClient } from "../IoTManagedIntegrationsClient";
import { IoTManagedIntegrationsPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListOtaTaskConfigurations: (
  config: IoTManagedIntegrationsPaginationConfiguration,
  input: ListOtaTaskConfigurationsCommandInput,
  ...rest: any[]
) => Paginator<ListOtaTaskConfigurationsCommandOutput> = createPaginator<
  IoTManagedIntegrationsPaginationConfiguration,
  ListOtaTaskConfigurationsCommandInput,
  ListOtaTaskConfigurationsCommandOutput
>(IoTManagedIntegrationsClient, ListOtaTaskConfigurationsCommand, "NextToken", "NextToken", "MaxResults");
