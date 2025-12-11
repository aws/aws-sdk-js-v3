// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListAppMonitorsCommand,
  ListAppMonitorsCommandInput,
  ListAppMonitorsCommandOutput,
} from "../commands/ListAppMonitorsCommand";
import { RUMClient } from "../RUMClient";
import { RUMPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListAppMonitors: (
  config: RUMPaginationConfiguration,
  input: ListAppMonitorsCommandInput,
  ...rest: any[]
) => Paginator<ListAppMonitorsCommandOutput> = createPaginator<
  RUMPaginationConfiguration,
  ListAppMonitorsCommandInput,
  ListAppMonitorsCommandOutput
>(RUMClient, ListAppMonitorsCommand, "NextToken", "NextToken", "MaxResults");
