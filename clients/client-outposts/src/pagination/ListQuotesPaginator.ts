// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import { ListQuotesCommand, ListQuotesCommandInput, ListQuotesCommandOutput } from "../commands/ListQuotesCommand";
import { OutpostsClient } from "../OutpostsClient";
import type { OutpostsPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListQuotes: (
  config: OutpostsPaginationConfiguration,
  input: ListQuotesCommandInput,
  ...rest: any[]
) => Paginator<ListQuotesCommandOutput> = createPaginator<
  OutpostsPaginationConfiguration,
  ListQuotesCommandInput,
  ListQuotesCommandOutput
>(OutpostsClient, ListQuotesCommand, "NextToken", "NextToken", "MaxResults");
