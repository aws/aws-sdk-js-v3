// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListTestRunDependenciesCommand,
  ListTestRunDependenciesCommandInput,
  ListTestRunDependenciesCommandOutput,
} from "../commands/ListTestRunDependenciesCommand";
import { Resiliencehubv2Client } from "../Resiliencehubv2Client";
import type { Resiliencehubv2PaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListTestRunDependencies: (
  config: Resiliencehubv2PaginationConfiguration,
  input: ListTestRunDependenciesCommandInput,
  ...rest: any[]
) => Paginator<ListTestRunDependenciesCommandOutput> = createPaginator<
  Resiliencehubv2PaginationConfiguration,
  ListTestRunDependenciesCommandInput,
  ListTestRunDependenciesCommandOutput
>(Resiliencehubv2Client, ListTestRunDependenciesCommand, "nextToken", "nextToken", "maxResults");
