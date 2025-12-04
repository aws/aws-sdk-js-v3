// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import { CodeCatalystClient } from "../CodeCatalystClient";
import {
  ListAccessTokensCommand,
  ListAccessTokensCommandInput,
  ListAccessTokensCommandOutput,
} from "../commands/ListAccessTokensCommand";
import { CodeCatalystPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListAccessTokens: (
  config: CodeCatalystPaginationConfiguration,
  input: ListAccessTokensCommandInput,
  ...rest: any[]
) => Paginator<ListAccessTokensCommandOutput> = createPaginator<
  CodeCatalystPaginationConfiguration,
  ListAccessTokensCommandInput,
  ListAccessTokensCommandOutput
>(CodeCatalystClient, ListAccessTokensCommand, "nextToken", "nextToken", "maxResults");
