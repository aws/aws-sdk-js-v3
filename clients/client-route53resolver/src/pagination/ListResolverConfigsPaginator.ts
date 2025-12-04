// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListResolverConfigsCommand,
  ListResolverConfigsCommandInput,
  ListResolverConfigsCommandOutput,
} from "../commands/ListResolverConfigsCommand";
import { Route53ResolverClient } from "../Route53ResolverClient";
import { Route53ResolverPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListResolverConfigs: (
  config: Route53ResolverPaginationConfiguration,
  input: ListResolverConfigsCommandInput,
  ...rest: any[]
) => Paginator<ListResolverConfigsCommandOutput> = createPaginator<
  Route53ResolverPaginationConfiguration,
  ListResolverConfigsCommandInput,
  ListResolverConfigsCommandOutput
>(Route53ResolverClient, ListResolverConfigsCommand, "NextToken", "NextToken", "MaxResults");
