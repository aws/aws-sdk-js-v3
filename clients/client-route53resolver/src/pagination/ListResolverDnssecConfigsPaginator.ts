// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListResolverDnssecConfigsCommand,
  ListResolverDnssecConfigsCommandInput,
  ListResolverDnssecConfigsCommandOutput,
} from "../commands/ListResolverDnssecConfigsCommand";
import { Route53ResolverClient } from "../Route53ResolverClient";
import { Route53ResolverPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListResolverDnssecConfigs: (
  config: Route53ResolverPaginationConfiguration,
  input: ListResolverDnssecConfigsCommandInput,
  ...rest: any[]
) => Paginator<ListResolverDnssecConfigsCommandOutput> = createPaginator<
  Route53ResolverPaginationConfiguration,
  ListResolverDnssecConfigsCommandInput,
  ListResolverDnssecConfigsCommandOutput
>(Route53ResolverClient, ListResolverDnssecConfigsCommand, "NextToken", "NextToken", "MaxResults");
