// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListResolvedTestRunTargetResourcesCommand,
  ListResolvedTestRunTargetResourcesCommandInput,
  ListResolvedTestRunTargetResourcesCommandOutput,
} from "../commands/ListResolvedTestRunTargetResourcesCommand";
import { Resiliencehubv2Client } from "../Resiliencehubv2Client";
import type { Resiliencehubv2PaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListResolvedTestRunTargetResources: (
  config: Resiliencehubv2PaginationConfiguration,
  input: ListResolvedTestRunTargetResourcesCommandInput,
  ...rest: any[]
) => Paginator<ListResolvedTestRunTargetResourcesCommandOutput> = createPaginator<
  Resiliencehubv2PaginationConfiguration,
  ListResolvedTestRunTargetResourcesCommandInput,
  ListResolvedTestRunTargetResourcesCommandOutput
>(Resiliencehubv2Client, ListResolvedTestRunTargetResourcesCommand, "nextToken", "nextToken", "maxResults");
