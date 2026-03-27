// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  GetAppMonitorDataCommand,
  GetAppMonitorDataCommandInput,
  GetAppMonitorDataCommandOutput,
} from "../commands/GetAppMonitorDataCommand";
import { RUMClient } from "../RUMClient";
import type { RUMPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateGetAppMonitorData: (
  config: RUMPaginationConfiguration,
  input: GetAppMonitorDataCommandInput,
  ...rest: any[]
) => Paginator<GetAppMonitorDataCommandOutput> = createPaginator<
  RUMPaginationConfiguration,
  GetAppMonitorDataCommandInput,
  GetAppMonitorDataCommandOutput
>(RUMClient, GetAppMonitorDataCommand, "NextToken", "NextToken", "MaxResults");
