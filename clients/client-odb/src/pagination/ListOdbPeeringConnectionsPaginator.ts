// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListOdbPeeringConnectionsCommand,
  ListOdbPeeringConnectionsCommandInput,
  ListOdbPeeringConnectionsCommandOutput,
} from "../commands/ListOdbPeeringConnectionsCommand";
import { OdbClient } from "../OdbClient";
import { OdbPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListOdbPeeringConnections: (
  config: OdbPaginationConfiguration,
  input: ListOdbPeeringConnectionsCommandInput,
  ...rest: any[]
) => Paginator<ListOdbPeeringConnectionsCommandOutput> = createPaginator<
  OdbPaginationConfiguration,
  ListOdbPeeringConnectionsCommandInput,
  ListOdbPeeringConnectionsCommandOutput
>(OdbClient, ListOdbPeeringConnectionsCommand, "nextToken", "nextToken", "maxResults");
