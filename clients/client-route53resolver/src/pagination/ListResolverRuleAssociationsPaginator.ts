// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListResolverRuleAssociationsCommand,
  ListResolverRuleAssociationsCommandInput,
  ListResolverRuleAssociationsCommandOutput,
} from "../commands/ListResolverRuleAssociationsCommand";
import { Route53ResolverClient } from "../Route53ResolverClient";
import { Route53ResolverPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListResolverRuleAssociations: (
  config: Route53ResolverPaginationConfiguration,
  input: ListResolverRuleAssociationsCommandInput,
  ...rest: any[]
) => Paginator<ListResolverRuleAssociationsCommandOutput> = createPaginator<
  Route53ResolverPaginationConfiguration,
  ListResolverRuleAssociationsCommandInput,
  ListResolverRuleAssociationsCommandOutput
>(Route53ResolverClient, ListResolverRuleAssociationsCommand, "NextToken", "NextToken", "MaxResults");
