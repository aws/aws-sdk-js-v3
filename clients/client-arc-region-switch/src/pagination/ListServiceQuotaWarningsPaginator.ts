// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import { ARCRegionSwitchClient } from "../ARCRegionSwitchClient";
import {
  ListServiceQuotaWarningsCommand,
  ListServiceQuotaWarningsCommandInput,
  ListServiceQuotaWarningsCommandOutput,
} from "../commands/ListServiceQuotaWarningsCommand";
import type { ARCRegionSwitchPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListServiceQuotaWarnings: (
  config: ARCRegionSwitchPaginationConfiguration,
  input: ListServiceQuotaWarningsCommandInput,
  ...rest: any[]
) => Paginator<ListServiceQuotaWarningsCommandOutput> = createPaginator<
  ARCRegionSwitchPaginationConfiguration,
  ListServiceQuotaWarningsCommandInput,
  ListServiceQuotaWarningsCommandOutput
>(ARCRegionSwitchClient, ListServiceQuotaWarningsCommand, "nextToken", "nextToken", "maxResults");
