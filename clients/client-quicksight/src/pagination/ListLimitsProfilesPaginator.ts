// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListLimitsProfilesCommand,
  ListLimitsProfilesCommandInput,
  ListLimitsProfilesCommandOutput,
} from "../commands/ListLimitsProfilesCommand";
import { QuickSightClient } from "../QuickSightClient";
import type { QuickSightPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListLimitsProfiles: (
  config: QuickSightPaginationConfiguration,
  input: ListLimitsProfilesCommandInput,
  ...rest: any[]
) => Paginator<ListLimitsProfilesCommandOutput> = createPaginator<
  QuickSightPaginationConfiguration,
  ListLimitsProfilesCommandInput,
  ListLimitsProfilesCommandOutput
>(QuickSightClient, ListLimitsProfilesCommand, "nextToken", "nextToken", "maxResults");
