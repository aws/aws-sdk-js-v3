// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListDependenciesCommand,
  ListDependenciesCommandInput,
  ListDependenciesCommandOutput,
} from "../commands/ListDependenciesCommand";
import { Resiliencehubv2Client } from "../Resiliencehubv2Client";
import type { Resiliencehubv2PaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListDependencies: (
  config: Resiliencehubv2PaginationConfiguration,
  input: ListDependenciesCommandInput,
  ...rest: any[]
) => Paginator<ListDependenciesCommandOutput> = createPaginator<
  Resiliencehubv2PaginationConfiguration,
  ListDependenciesCommandInput,
  ListDependenciesCommandOutput
>(Resiliencehubv2Client, ListDependenciesCommand, "nextToken", "nextToken", "maxResults");
