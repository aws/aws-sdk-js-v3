// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListAppComponentCompliancesCommand,
  ListAppComponentCompliancesCommandInput,
  ListAppComponentCompliancesCommandOutput,
} from "../commands/ListAppComponentCompliancesCommand";
import { ResiliencehubClient } from "../ResiliencehubClient";
import { ResiliencehubPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListAppComponentCompliances: (
  config: ResiliencehubPaginationConfiguration,
  input: ListAppComponentCompliancesCommandInput,
  ...rest: any[]
) => Paginator<ListAppComponentCompliancesCommandOutput> = createPaginator<
  ResiliencehubPaginationConfiguration,
  ListAppComponentCompliancesCommandInput,
  ListAppComponentCompliancesCommandOutput
>(ResiliencehubClient, ListAppComponentCompliancesCommand, "nextToken", "nextToken", "maxResults");
