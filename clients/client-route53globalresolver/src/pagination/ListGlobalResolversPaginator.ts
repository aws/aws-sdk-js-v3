// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import { Paginator } from "@smithy/types";

import {
  ListGlobalResolversCommand,
  ListGlobalResolversCommandInput,
  ListGlobalResolversCommandOutput,
} from "../commands/ListGlobalResolversCommand";
import { Route53GlobalResolverClient } from "../Route53GlobalResolverClient";
import { Route53GlobalResolverPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListGlobalResolvers: (
  config: Route53GlobalResolverPaginationConfiguration,
  input: ListGlobalResolversCommandInput,
  ...rest: any[]
) => Paginator<ListGlobalResolversCommandOutput> = createPaginator<
  Route53GlobalResolverPaginationConfiguration,
  ListGlobalResolversCommandInput,
  ListGlobalResolversCommandOutput
>(Route53GlobalResolverClient, ListGlobalResolversCommand, "nextToken", "nextToken", "maxResults");
