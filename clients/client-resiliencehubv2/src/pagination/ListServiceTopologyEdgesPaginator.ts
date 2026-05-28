// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListServiceTopologyEdgesCommand,
  ListServiceTopologyEdgesCommandInput,
  ListServiceTopologyEdgesCommandOutput,
} from "../commands/ListServiceTopologyEdgesCommand";
import { Resiliencehubv2Client } from "../Resiliencehubv2Client";
import type { Resiliencehubv2PaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListServiceTopologyEdges: (
  config: Resiliencehubv2PaginationConfiguration,
  input: ListServiceTopologyEdgesCommandInput,
  ...rest: any[]
) => Paginator<ListServiceTopologyEdgesCommandOutput> = createPaginator<
  Resiliencehubv2PaginationConfiguration,
  ListServiceTopologyEdgesCommandInput,
  ListServiceTopologyEdgesCommandOutput
>(Resiliencehubv2Client, ListServiceTopologyEdgesCommand, "nextToken", "nextToken", "maxResults");
