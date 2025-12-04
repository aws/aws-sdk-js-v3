// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListExecutionsCommand,
  ListExecutionsCommandInput,
  ListExecutionsCommandOutput,
} from "../commands/ListExecutionsCommand";
import { TransferClient } from "../TransferClient";
import { TransferPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListExecutions: (
  config: TransferPaginationConfiguration,
  input: ListExecutionsCommandInput,
  ...rest: any[]
) => Paginator<ListExecutionsCommandOutput> = createPaginator<
  TransferPaginationConfiguration,
  ListExecutionsCommandInput,
  ListExecutionsCommandOutput
>(TransferClient, ListExecutionsCommand, "NextToken", "NextToken", "MaxResults");
