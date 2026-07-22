// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListSharedDNSViewsCommand,
  ListSharedDNSViewsCommandInput,
  ListSharedDNSViewsCommandOutput,
} from "../commands/ListSharedDNSViewsCommand";
import { Route53GlobalResolverClient } from "../Route53GlobalResolverClient";
import type { Route53GlobalResolverPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListSharedDNSViews: (
  config: Route53GlobalResolverPaginationConfiguration,
  input: ListSharedDNSViewsCommandInput,
  ...rest: any[]
) => Paginator<ListSharedDNSViewsCommandOutput> = createPaginator<
  Route53GlobalResolverPaginationConfiguration,
  ListSharedDNSViewsCommandInput,
  ListSharedDNSViewsCommandOutput
>(Route53GlobalResolverClient, ListSharedDNSViewsCommand, "nextToken", "nextToken", "maxResults");
