// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import { ListFaqsCommand, ListFaqsCommandInput, ListFaqsCommandOutput } from "../commands/ListFaqsCommand";
import { KendraClient } from "../KendraClient";
import { KendraPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListFaqs: (
  config: KendraPaginationConfiguration,
  input: ListFaqsCommandInput,
  ...rest: any[]
) => Paginator<ListFaqsCommandOutput> = createPaginator<
  KendraPaginationConfiguration,
  ListFaqsCommandInput,
  ListFaqsCommandOutput
>(KendraClient, ListFaqsCommand, "NextToken", "NextToken", "MaxResults");
