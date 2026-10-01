// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListWebFunctionRevisionsCommand,
  ListWebFunctionRevisionsCommandInput,
  ListWebFunctionRevisionsCommandOutput,
} from "../commands/ListWebFunctionRevisionsCommand";
import { LambdaWebClient } from "../LambdaWebClient";
import type { LambdaWebPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListWebFunctionRevisions: (
  config: LambdaWebPaginationConfiguration,
  input: ListWebFunctionRevisionsCommandInput,
  ...rest: any[]
) => Paginator<ListWebFunctionRevisionsCommandOutput> = createPaginator<
  LambdaWebPaginationConfiguration,
  ListWebFunctionRevisionsCommandInput,
  ListWebFunctionRevisionsCommandOutput
>(LambdaWebClient, ListWebFunctionRevisionsCommand, "nextToken", "nextToken", "maxResults");
