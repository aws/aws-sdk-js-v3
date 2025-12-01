// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import { Paginator } from "@smithy/types";

import {
  ListDNSViewsCommand,
  ListDNSViewsCommandInput,
  ListDNSViewsCommandOutput,
} from "../commands/ListDNSViewsCommand";
import { Route53GlobalResolverClient } from "../Route53GlobalResolverClient";
import { Route53GlobalResolverPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListDNSViews: (
  config: Route53GlobalResolverPaginationConfiguration,
  input: ListDNSViewsCommandInput,
  ...rest: any[]
) => Paginator<ListDNSViewsCommandOutput> = createPaginator<
  Route53GlobalResolverPaginationConfiguration,
  ListDNSViewsCommandInput,
  ListDNSViewsCommandOutput
>(Route53GlobalResolverClient, ListDNSViewsCommand, "nextToken", "nextToken", "maxResults");
