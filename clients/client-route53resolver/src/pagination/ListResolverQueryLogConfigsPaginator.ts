// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListResolverQueryLogConfigsCommand,
  ListResolverQueryLogConfigsCommandInput,
  ListResolverQueryLogConfigsCommandOutput,
} from "../commands/ListResolverQueryLogConfigsCommand";
import { Route53ResolverClient } from "../Route53ResolverClient";
import { Route53ResolverPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListResolverQueryLogConfigs: (
  config: Route53ResolverPaginationConfiguration,
  input: ListResolverQueryLogConfigsCommandInput,
  ...rest: any[]
) => Paginator<ListResolverQueryLogConfigsCommandOutput> = createPaginator<
  Route53ResolverPaginationConfiguration,
  ListResolverQueryLogConfigsCommandInput,
  ListResolverQueryLogConfigsCommandOutput
>(Route53ResolverClient, ListResolverQueryLogConfigsCommand, "NextToken", "NextToken", "MaxResults");
