// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListTransactionsCommand,
  ListTransactionsCommandInput,
  ListTransactionsCommandOutput,
} from "../commands/ListTransactionsCommand";
import { LakeFormationClient } from "../LakeFormationClient";
import { LakeFormationPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListTransactions: (
  config: LakeFormationPaginationConfiguration,
  input: ListTransactionsCommandInput,
  ...rest: any[]
) => Paginator<ListTransactionsCommandOutput> = createPaginator<
  LakeFormationPaginationConfiguration,
  ListTransactionsCommandInput,
  ListTransactionsCommandOutput
>(LakeFormationClient, ListTransactionsCommand, "NextToken", "NextToken", "MaxResults");
