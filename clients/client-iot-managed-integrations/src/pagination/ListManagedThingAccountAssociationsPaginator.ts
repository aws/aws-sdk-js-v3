// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListManagedThingAccountAssociationsCommand,
  ListManagedThingAccountAssociationsCommandInput,
  ListManagedThingAccountAssociationsCommandOutput,
} from "../commands/ListManagedThingAccountAssociationsCommand";
import { IoTManagedIntegrationsClient } from "../IoTManagedIntegrationsClient";
import { IoTManagedIntegrationsPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListManagedThingAccountAssociations: (
  config: IoTManagedIntegrationsPaginationConfiguration,
  input: ListManagedThingAccountAssociationsCommandInput,
  ...rest: any[]
) => Paginator<ListManagedThingAccountAssociationsCommandOutput> = createPaginator<
  IoTManagedIntegrationsPaginationConfiguration,
  ListManagedThingAccountAssociationsCommandInput,
  ListManagedThingAccountAssociationsCommandOutput
>(IoTManagedIntegrationsClient, ListManagedThingAccountAssociationsCommand, "NextToken", "NextToken", "MaxResults");
