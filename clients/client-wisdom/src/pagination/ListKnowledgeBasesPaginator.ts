// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListKnowledgeBasesCommand,
  ListKnowledgeBasesCommandInput,
  ListKnowledgeBasesCommandOutput,
} from "../commands/ListKnowledgeBasesCommand";
import { WisdomClient } from "../WisdomClient";
import type { WisdomPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListKnowledgeBases: (
  config: WisdomPaginationConfiguration,
  input: ListKnowledgeBasesCommandInput,
  ...rest: any[]
) => Paginator<ListKnowledgeBasesCommandOutput> = createPaginator<
  WisdomPaginationConfiguration,
  ListKnowledgeBasesCommandInput,
  ListKnowledgeBasesCommandOutput
>(WisdomClient, ListKnowledgeBasesCommand, "nextToken", "nextToken", "maxResults");
