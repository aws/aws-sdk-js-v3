// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListAssetVersionsCommand,
  ListAssetVersionsCommandInput,
  ListAssetVersionsCommandOutput,
} from "../commands/ListAssetVersionsCommand";
import { DevOpsAgentClient } from "../DevOpsAgentClient";
import type { DevOpsAgentPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListAssetVersions: (
  config: DevOpsAgentPaginationConfiguration,
  input: ListAssetVersionsCommandInput,
  ...rest: any[]
) => Paginator<ListAssetVersionsCommandOutput> = createPaginator<
  DevOpsAgentPaginationConfiguration,
  ListAssetVersionsCommandInput,
  ListAssetVersionsCommandOutput
>(DevOpsAgentClient, ListAssetVersionsCommand, "nextToken", "nextToken", "maxResults");
