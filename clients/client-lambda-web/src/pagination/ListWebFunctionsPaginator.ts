// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListWebFunctionsCommand,
  ListWebFunctionsCommandInput,
  ListWebFunctionsCommandOutput,
} from "../commands/ListWebFunctionsCommand";
import { LambdaWebClient } from "../LambdaWebClient";
import type { LambdaWebPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListWebFunctions: (
  config: LambdaWebPaginationConfiguration,
  input: ListWebFunctionsCommandInput,
  ...rest: any[]
) => Paginator<ListWebFunctionsCommandOutput> = createPaginator<
  LambdaWebPaginationConfiguration,
  ListWebFunctionsCommandInput,
  ListWebFunctionsCommandOutput
>(LambdaWebClient, ListWebFunctionsCommand, "nextToken", "nextToken", "maxResults");
