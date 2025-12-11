// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListNodesSummaryCommand,
  ListNodesSummaryCommandInput,
  ListNodesSummaryCommandOutput,
} from "../commands/ListNodesSummaryCommand";
import { SSMClient } from "../SSMClient";
import { SSMPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListNodesSummary: (
  config: SSMPaginationConfiguration,
  input: ListNodesSummaryCommandInput,
  ...rest: any[]
) => Paginator<ListNodesSummaryCommandOutput> = createPaginator<
  SSMPaginationConfiguration,
  ListNodesSummaryCommandInput,
  ListNodesSummaryCommandOutput
>(SSMClient, ListNodesSummaryCommand, "NextToken", "NextToken", "MaxResults");
