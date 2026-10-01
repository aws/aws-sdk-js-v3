// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListWebFunctionEndpointsCommand,
  ListWebFunctionEndpointsCommandInput,
  ListWebFunctionEndpointsCommandOutput,
} from "../commands/ListWebFunctionEndpointsCommand";
import { LambdaWebClient } from "../LambdaWebClient";
import type { LambdaWebPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListWebFunctionEndpoints: (
  config: LambdaWebPaginationConfiguration,
  input: ListWebFunctionEndpointsCommandInput,
  ...rest: any[]
) => Paginator<ListWebFunctionEndpointsCommandOutput> = createPaginator<
  LambdaWebPaginationConfiguration,
  ListWebFunctionEndpointsCommandInput,
  ListWebFunctionEndpointsCommandOutput
>(LambdaWebClient, ListWebFunctionEndpointsCommand, "nextToken", "nextToken", "maxResults");
