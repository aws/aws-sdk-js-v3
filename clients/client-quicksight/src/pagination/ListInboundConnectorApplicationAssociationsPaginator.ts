// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListInboundConnectorApplicationAssociationsCommand,
  ListInboundConnectorApplicationAssociationsCommandInput,
  ListInboundConnectorApplicationAssociationsCommandOutput,
} from "../commands/ListInboundConnectorApplicationAssociationsCommand";
import { QuickSightClient } from "../QuickSightClient";
import type { QuickSightPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListInboundConnectorApplicationAssociations: (
  config: QuickSightPaginationConfiguration,
  input: ListInboundConnectorApplicationAssociationsCommandInput,
  ...rest: any[]
) => Paginator<ListInboundConnectorApplicationAssociationsCommandOutput> = createPaginator<
  QuickSightPaginationConfiguration,
  ListInboundConnectorApplicationAssociationsCommandInput,
  ListInboundConnectorApplicationAssociationsCommandOutput
>(QuickSightClient, ListInboundConnectorApplicationAssociationsCommand, "NextToken", "NextToken", "MaxResults");
