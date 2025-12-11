// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListResolverRulesCommand,
  ListResolverRulesCommandInput,
  ListResolverRulesCommandOutput,
} from "../commands/ListResolverRulesCommand";
import { Route53ResolverClient } from "../Route53ResolverClient";
import { Route53ResolverPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListResolverRules: (
  config: Route53ResolverPaginationConfiguration,
  input: ListResolverRulesCommandInput,
  ...rest: any[]
) => Paginator<ListResolverRulesCommandOutput> = createPaginator<
  Route53ResolverPaginationConfiguration,
  ListResolverRulesCommandInput,
  ListResolverRulesCommandOutput
>(Route53ResolverClient, ListResolverRulesCommand, "NextToken", "NextToken", "MaxResults");
