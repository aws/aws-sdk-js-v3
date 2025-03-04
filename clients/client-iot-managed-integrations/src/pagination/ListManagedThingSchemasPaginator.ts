// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import { Paginator } from "@smithy/types";

import {
  ListManagedThingSchemasCommand,
  ListManagedThingSchemasCommandInput,
  ListManagedThingSchemasCommandOutput,
} from "../commands/ListManagedThingSchemasCommand";
import { IoTManagedIntegrationsClient } from "../IoTManagedIntegrationsClient";
import { IoTManagedIntegrationsPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListManagedThingSchemas: (
  config: IoTManagedIntegrationsPaginationConfiguration,
  input: ListManagedThingSchemasCommandInput,
  ...rest: any[]
) => Paginator<ListManagedThingSchemasCommandOutput> = createPaginator<
  IoTManagedIntegrationsPaginationConfiguration,
  ListManagedThingSchemasCommandInput,
  ListManagedThingSchemasCommandOutput
>(IoTManagedIntegrationsClient, ListManagedThingSchemasCommand, "NextToken", "NextToken", "MaxResults");
