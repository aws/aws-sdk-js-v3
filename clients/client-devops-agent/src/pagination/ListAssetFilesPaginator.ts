// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListAssetFilesCommand,
  ListAssetFilesCommandInput,
  ListAssetFilesCommandOutput,
} from "../commands/ListAssetFilesCommand";
import { DevOpsAgentClient } from "../DevOpsAgentClient";
import type { DevOpsAgentPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListAssetFiles: (
  config: DevOpsAgentPaginationConfiguration,
  input: ListAssetFilesCommandInput,
  ...rest: any[]
) => Paginator<ListAssetFilesCommandOutput> = createPaginator<
  DevOpsAgentPaginationConfiguration,
  ListAssetFilesCommandInput,
  ListAssetFilesCommandOutput
>(DevOpsAgentClient, ListAssetFilesCommand, "nextToken", "nextToken", "maxResults");
