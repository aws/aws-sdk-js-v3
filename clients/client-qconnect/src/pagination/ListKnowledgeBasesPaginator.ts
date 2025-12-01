// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListKnowledgeBasesCommand,
  ListKnowledgeBasesCommandInput,
  ListKnowledgeBasesCommandOutput,
} from "../commands/ListKnowledgeBasesCommand";
import { QConnectClient } from "../QConnectClient";
import { QConnectPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListKnowledgeBases: (
  config: QConnectPaginationConfiguration,
  input: ListKnowledgeBasesCommandInput,
  ...rest: any[]
) => Paginator<ListKnowledgeBasesCommandOutput> = createPaginator<
  QConnectPaginationConfiguration,
  ListKnowledgeBasesCommandInput,
  ListKnowledgeBasesCommandOutput
>(QConnectClient, ListKnowledgeBasesCommand, "nextToken", "nextToken", "maxResults");
