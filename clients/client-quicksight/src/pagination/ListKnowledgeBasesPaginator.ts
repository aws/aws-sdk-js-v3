// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListKnowledgeBasesCommand,
  ListKnowledgeBasesCommandInput,
  ListKnowledgeBasesCommandOutput,
} from "../commands/ListKnowledgeBasesCommand";
import { QuickSightClient } from "../QuickSightClient";
import type { QuickSightPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListKnowledgeBases: (
  config: QuickSightPaginationConfiguration,
  input: ListKnowledgeBasesCommandInput,
  ...rest: any[]
) => Paginator<ListKnowledgeBasesCommandOutput> = createPaginator<
  QuickSightPaginationConfiguration,
  ListKnowledgeBasesCommandInput,
  ListKnowledgeBasesCommandOutput
>(QuickSightClient, ListKnowledgeBasesCommand, "NextToken", "NextToken", "MaxResults");
