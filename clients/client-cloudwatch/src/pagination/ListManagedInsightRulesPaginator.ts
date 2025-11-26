// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import { CloudWatchClient } from "../CloudWatchClient";
import {
  ListManagedInsightRulesCommand,
  ListManagedInsightRulesCommandInput,
  ListManagedInsightRulesCommandOutput,
} from "../commands/ListManagedInsightRulesCommand";
import { CloudWatchPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListManagedInsightRules: (
  config: CloudWatchPaginationConfiguration,
  input: ListManagedInsightRulesCommandInput,
  ...rest: any[]
) => Paginator<ListManagedInsightRulesCommandOutput> = createPaginator<
  CloudWatchPaginationConfiguration,
  ListManagedInsightRulesCommandInput,
  ListManagedInsightRulesCommandOutput
>(CloudWatchClient, ListManagedInsightRulesCommand, "NextToken", "NextToken", "MaxResults");
