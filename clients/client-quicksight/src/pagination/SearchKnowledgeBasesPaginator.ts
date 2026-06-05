// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  SearchKnowledgeBasesCommand,
  SearchKnowledgeBasesCommandInput,
  SearchKnowledgeBasesCommandOutput,
} from "../commands/SearchKnowledgeBasesCommand";
import { QuickSightClient } from "../QuickSightClient";
import type { QuickSightPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateSearchKnowledgeBases: (
  config: QuickSightPaginationConfiguration,
  input: SearchKnowledgeBasesCommandInput,
  ...rest: any[]
) => Paginator<SearchKnowledgeBasesCommandOutput> = createPaginator<
  QuickSightPaginationConfiguration,
  SearchKnowledgeBasesCommandInput,
  SearchKnowledgeBasesCommandOutput
>(QuickSightClient, SearchKnowledgeBasesCommand, "NextToken", "NextToken", "MaxResults");
