// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import { ListHITsCommand, ListHITsCommandInput, ListHITsCommandOutput } from "../commands/ListHITsCommand";
import { MTurkClient } from "../MTurkClient";
import { MTurkPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListHITs: (
  config: MTurkPaginationConfiguration,
  input: ListHITsCommandInput,
  ...rest: any[]
) => Paginator<ListHITsCommandOutput> = createPaginator<
  MTurkPaginationConfiguration,
  ListHITsCommandInput,
  ListHITsCommandOutput
>(MTurkClient, ListHITsCommand, "NextToken", "NextToken", "MaxResults");
