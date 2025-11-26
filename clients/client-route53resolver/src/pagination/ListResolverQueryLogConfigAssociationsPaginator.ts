// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListResolverQueryLogConfigAssociationsCommand,
  ListResolverQueryLogConfigAssociationsCommandInput,
  ListResolverQueryLogConfigAssociationsCommandOutput,
} from "../commands/ListResolverQueryLogConfigAssociationsCommand";
import { Route53ResolverClient } from "../Route53ResolverClient";
import { Route53ResolverPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListResolverQueryLogConfigAssociations: (
  config: Route53ResolverPaginationConfiguration,
  input: ListResolverQueryLogConfigAssociationsCommandInput,
  ...rest: any[]
) => Paginator<ListResolverQueryLogConfigAssociationsCommandOutput> = createPaginator<
  Route53ResolverPaginationConfiguration,
  ListResolverQueryLogConfigAssociationsCommandInput,
  ListResolverQueryLogConfigAssociationsCommandOutput
>(Route53ResolverClient, ListResolverQueryLogConfigAssociationsCommand, "NextToken", "NextToken", "MaxResults");
