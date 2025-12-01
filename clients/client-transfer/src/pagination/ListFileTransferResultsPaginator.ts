// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListFileTransferResultsCommand,
  ListFileTransferResultsCommandInput,
  ListFileTransferResultsCommandOutput,
} from "../commands/ListFileTransferResultsCommand";
import { TransferClient } from "../TransferClient";
import { TransferPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListFileTransferResults: (
  config: TransferPaginationConfiguration,
  input: ListFileTransferResultsCommandInput,
  ...rest: any[]
) => Paginator<ListFileTransferResultsCommandOutput> = createPaginator<
  TransferPaginationConfiguration,
  ListFileTransferResultsCommandInput,
  ListFileTransferResultsCommandOutput
>(TransferClient, ListFileTransferResultsCommand, "NextToken", "NextToken", "MaxResults");
