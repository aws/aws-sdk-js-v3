// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListAssetTypesCommand,
  ListAssetTypesCommandInput,
  ListAssetTypesCommandOutput,
} from "../commands/ListAssetTypesCommand";
import { DevOpsAgentClient } from "../DevOpsAgentClient";
import type { DevOpsAgentPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListAssetTypes: (
  config: DevOpsAgentPaginationConfiguration,
  input: ListAssetTypesCommandInput,
  ...rest: any[]
) => Paginator<ListAssetTypesCommandOutput> = createPaginator<
  DevOpsAgentPaginationConfiguration,
  ListAssetTypesCommandInput,
  ListAssetTypesCommandOutput
>(DevOpsAgentClient, ListAssetTypesCommand, "nextToken", "nextToken", "maxResults");
