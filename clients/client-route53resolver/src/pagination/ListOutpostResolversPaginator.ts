// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListOutpostResolversCommand,
  ListOutpostResolversCommandInput,
  ListOutpostResolversCommandOutput,
} from "../commands/ListOutpostResolversCommand";
import { Route53ResolverClient } from "../Route53ResolverClient";
import { Route53ResolverPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListOutpostResolvers: (
  config: Route53ResolverPaginationConfiguration,
  input: ListOutpostResolversCommandInput,
  ...rest: any[]
) => Paginator<ListOutpostResolversCommandOutput> = createPaginator<
  Route53ResolverPaginationConfiguration,
  ListOutpostResolversCommandInput,
  ListOutpostResolversCommandOutput
>(Route53ResolverClient, ListOutpostResolversCommand, "NextToken", "NextToken", "MaxResults");
