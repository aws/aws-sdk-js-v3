// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListDevicePositionsCommand,
  ListDevicePositionsCommandInput,
  ListDevicePositionsCommandOutput,
} from "../commands/ListDevicePositionsCommand";
import { LocationClient } from "../LocationClient";
import { LocationPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListDevicePositions: (
  config: LocationPaginationConfiguration,
  input: ListDevicePositionsCommandInput,
  ...rest: any[]
) => Paginator<ListDevicePositionsCommandOutput> = createPaginator<
  LocationPaginationConfiguration,
  ListDevicePositionsCommandInput,
  ListDevicePositionsCommandOutput
>(LocationClient, ListDevicePositionsCommand, "NextToken", "NextToken", "MaxResults");
