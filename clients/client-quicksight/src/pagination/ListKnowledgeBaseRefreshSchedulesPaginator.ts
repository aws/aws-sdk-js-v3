// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListKnowledgeBaseRefreshSchedulesCommand,
  ListKnowledgeBaseRefreshSchedulesCommandInput,
  ListKnowledgeBaseRefreshSchedulesCommandOutput,
} from "../commands/ListKnowledgeBaseRefreshSchedulesCommand";
import { QuickSightClient } from "../QuickSightClient";
import type { QuickSightPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListKnowledgeBaseRefreshSchedules: (
  config: QuickSightPaginationConfiguration,
  input: ListKnowledgeBaseRefreshSchedulesCommandInput,
  ...rest: any[]
) => Paginator<ListKnowledgeBaseRefreshSchedulesCommandOutput> = createPaginator<
  QuickSightPaginationConfiguration,
  ListKnowledgeBaseRefreshSchedulesCommandInput,
  ListKnowledgeBaseRefreshSchedulesCommandOutput
>(QuickSightClient, ListKnowledgeBaseRefreshSchedulesCommand, "NextToken", "NextToken", "MaxResults");
