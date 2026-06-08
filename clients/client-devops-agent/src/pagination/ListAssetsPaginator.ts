// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import { ListAssetsCommand, ListAssetsCommandInput, ListAssetsCommandOutput } from "../commands/ListAssetsCommand";
import { DevOpsAgentClient } from "../DevOpsAgentClient";
import type { DevOpsAgentPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListAssets: (
  config: DevOpsAgentPaginationConfiguration,
  input: ListAssetsCommandInput,
  ...rest: any[]
) => Paginator<ListAssetsCommandOutput> = createPaginator<
  DevOpsAgentPaginationConfiguration,
  ListAssetsCommandInput,
  ListAssetsCommandOutput
>(DevOpsAgentClient, ListAssetsCommand, "nextToken", "nextToken", "maxResults");
