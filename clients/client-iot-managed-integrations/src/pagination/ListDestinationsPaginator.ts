// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListDestinationsCommand,
  ListDestinationsCommandInput,
  ListDestinationsCommandOutput,
} from "../commands/ListDestinationsCommand";
import { IoTManagedIntegrationsClient } from "../IoTManagedIntegrationsClient";
import { IoTManagedIntegrationsPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListDestinations: (
  config: IoTManagedIntegrationsPaginationConfiguration,
  input: ListDestinationsCommandInput,
  ...rest: any[]
) => Paginator<ListDestinationsCommandOutput> = createPaginator<
  IoTManagedIntegrationsPaginationConfiguration,
  ListDestinationsCommandInput,
  ListDestinationsCommandOutput
>(IoTManagedIntegrationsClient, ListDestinationsCommand, "NextToken", "NextToken", "MaxResults");
