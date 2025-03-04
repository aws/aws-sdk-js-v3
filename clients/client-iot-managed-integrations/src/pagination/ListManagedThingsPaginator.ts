// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import { Paginator } from "@smithy/types";

import {
  ListManagedThingsCommand,
  ListManagedThingsCommandInput,
  ListManagedThingsCommandOutput,
} from "../commands/ListManagedThingsCommand";
import { IoTManagedIntegrationsClient } from "../IoTManagedIntegrationsClient";
import { IoTManagedIntegrationsPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListManagedThings: (
  config: IoTManagedIntegrationsPaginationConfiguration,
  input: ListManagedThingsCommandInput,
  ...rest: any[]
) => Paginator<ListManagedThingsCommandOutput> = createPaginator<
  IoTManagedIntegrationsPaginationConfiguration,
  ListManagedThingsCommandInput,
  ListManagedThingsCommandOutput
>(IoTManagedIntegrationsClient, ListManagedThingsCommand, "NextToken", "NextToken", "MaxResults");
