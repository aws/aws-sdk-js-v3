// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  GetDevicePositionHistoryCommand,
  GetDevicePositionHistoryCommandInput,
  GetDevicePositionHistoryCommandOutput,
} from "../commands/GetDevicePositionHistoryCommand";
import { LocationClient } from "../LocationClient";
import { LocationPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateGetDevicePositionHistory: (
  config: LocationPaginationConfiguration,
  input: GetDevicePositionHistoryCommandInput,
  ...rest: any[]
) => Paginator<GetDevicePositionHistoryCommandOutput> = createPaginator<
  LocationPaginationConfiguration,
  GetDevicePositionHistoryCommandInput,
  GetDevicePositionHistoryCommandOutput
>(LocationClient, GetDevicePositionHistoryCommand, "NextToken", "NextToken", "MaxResults");
