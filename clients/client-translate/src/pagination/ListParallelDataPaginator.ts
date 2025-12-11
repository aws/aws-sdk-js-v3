// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListParallelDataCommand,
  ListParallelDataCommandInput,
  ListParallelDataCommandOutput,
} from "../commands/ListParallelDataCommand";
import { TranslateClient } from "../TranslateClient";
import { TranslatePaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListParallelData: (
  config: TranslatePaginationConfiguration,
  input: ListParallelDataCommandInput,
  ...rest: any[]
) => Paginator<ListParallelDataCommandOutput> = createPaginator<
  TranslatePaginationConfiguration,
  ListParallelDataCommandInput,
  ListParallelDataCommandOutput
>(TranslateClient, ListParallelDataCommand, "NextToken", "NextToken", "MaxResults");
