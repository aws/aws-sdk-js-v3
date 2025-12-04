// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import { ListTopicsCommand, ListTopicsCommandInput, ListTopicsCommandOutput } from "../commands/ListTopicsCommand";
import { QuickSightClient } from "../QuickSightClient";
import { QuickSightPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListTopics: (
  config: QuickSightPaginationConfiguration,
  input: ListTopicsCommandInput,
  ...rest: any[]
) => Paginator<ListTopicsCommandOutput> = createPaginator<
  QuickSightPaginationConfiguration,
  ListTopicsCommandInput,
  ListTopicsCommandOutput
>(QuickSightClient, ListTopicsCommand, "NextToken", "NextToken", "MaxResults");
