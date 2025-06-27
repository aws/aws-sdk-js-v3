// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import { Paginator } from "@smithy/types";

import {
  ListAccountAssociationsCommand,
  ListAccountAssociationsCommandInput,
  ListAccountAssociationsCommandOutput,
} from "../commands/ListAccountAssociationsCommand";
import { IoTManagedIntegrationsClient } from "../IoTManagedIntegrationsClient";
import { IoTManagedIntegrationsPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListAccountAssociations: (
  config: IoTManagedIntegrationsPaginationConfiguration,
  input: ListAccountAssociationsCommandInput,
  ...rest: any[]
) => Paginator<ListAccountAssociationsCommandOutput> = createPaginator<
  IoTManagedIntegrationsPaginationConfiguration,
  ListAccountAssociationsCommandInput,
  ListAccountAssociationsCommandOutput
>(IoTManagedIntegrationsClient, ListAccountAssociationsCommand, "NextToken", "NextToken", "MaxResults");
