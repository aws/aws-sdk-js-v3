// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import { Paginator } from "@smithy/types";

import {
  ListConnectorDestinationsCommand,
  ListConnectorDestinationsCommandInput,
  ListConnectorDestinationsCommandOutput,
} from "../commands/ListConnectorDestinationsCommand";
import { IoTManagedIntegrationsClient } from "../IoTManagedIntegrationsClient";
import { IoTManagedIntegrationsPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListConnectorDestinations: (
  config: IoTManagedIntegrationsPaginationConfiguration,
  input: ListConnectorDestinationsCommandInput,
  ...rest: any[]
) => Paginator<ListConnectorDestinationsCommandOutput> = createPaginator<
  IoTManagedIntegrationsPaginationConfiguration,
  ListConnectorDestinationsCommandInput,
  ListConnectorDestinationsCommandOutput
>(IoTManagedIntegrationsClient, ListConnectorDestinationsCommand, "NextToken", "NextToken", "MaxResults");
