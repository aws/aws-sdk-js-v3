// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListIntegrationAssociationsCommand,
  ListIntegrationAssociationsCommandInput,
  ListIntegrationAssociationsCommandOutput,
} from "../commands/ListIntegrationAssociationsCommand";
import { ConnectClient } from "../ConnectClient";
import { ConnectPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListIntegrationAssociations: (
  config: ConnectPaginationConfiguration,
  input: ListIntegrationAssociationsCommandInput,
  ...rest: any[]
) => Paginator<ListIntegrationAssociationsCommandOutput> = createPaginator<
  ConnectPaginationConfiguration,
  ListIntegrationAssociationsCommandInput,
  ListIntegrationAssociationsCommandOutput
>(ConnectClient, ListIntegrationAssociationsCommand, "NextToken", "NextToken", "MaxResults");
