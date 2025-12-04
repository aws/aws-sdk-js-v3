// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListChangedBlocksCommand,
  ListChangedBlocksCommandInput,
  ListChangedBlocksCommandOutput,
} from "../commands/ListChangedBlocksCommand";
import { EBSClient } from "../EBSClient";
import { EBSPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListChangedBlocks: (
  config: EBSPaginationConfiguration,
  input: ListChangedBlocksCommandInput,
  ...rest: any[]
) => Paginator<ListChangedBlocksCommandOutput> = createPaginator<
  EBSPaginationConfiguration,
  ListChangedBlocksCommandInput,
  ListChangedBlocksCommandOutput
>(EBSClient, ListChangedBlocksCommand, "NextToken", "NextToken", "MaxResults");
