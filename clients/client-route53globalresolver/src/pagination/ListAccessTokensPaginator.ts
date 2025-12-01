// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import { Paginator } from "@smithy/types";

import {
  ListAccessTokensCommand,
  ListAccessTokensCommandInput,
  ListAccessTokensCommandOutput,
} from "../commands/ListAccessTokensCommand";
import { Route53GlobalResolverClient } from "../Route53GlobalResolverClient";
import { Route53GlobalResolverPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListAccessTokens: (
  config: Route53GlobalResolverPaginationConfiguration,
  input: ListAccessTokensCommandInput,
  ...rest: any[]
) => Paginator<ListAccessTokensCommandOutput> = createPaginator<
  Route53GlobalResolverPaginationConfiguration,
  ListAccessTokensCommandInput,
  ListAccessTokensCommandOutput
>(Route53GlobalResolverClient, ListAccessTokensCommand, "nextToken", "nextToken", "maxResults");
