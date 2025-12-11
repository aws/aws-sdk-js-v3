// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import { ARCRegionSwitchClient } from "../ARCRegionSwitchClient";
import {
  ListRoute53HealthChecksCommand,
  ListRoute53HealthChecksCommandInput,
  ListRoute53HealthChecksCommandOutput,
} from "../commands/ListRoute53HealthChecksCommand";
import { ARCRegionSwitchPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListRoute53HealthChecks: (
  config: ARCRegionSwitchPaginationConfiguration,
  input: ListRoute53HealthChecksCommandInput,
  ...rest: any[]
) => Paginator<ListRoute53HealthChecksCommandOutput> = createPaginator<
  ARCRegionSwitchPaginationConfiguration,
  ListRoute53HealthChecksCommandInput,
  ListRoute53HealthChecksCommandOutput
>(ARCRegionSwitchClient, ListRoute53HealthChecksCommand, "nextToken", "nextToken", "maxResults");
