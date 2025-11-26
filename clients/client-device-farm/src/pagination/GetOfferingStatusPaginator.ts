// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  GetOfferingStatusCommand,
  GetOfferingStatusCommandInput,
  GetOfferingStatusCommandOutput,
} from "../commands/GetOfferingStatusCommand";
import { DeviceFarmClient } from "../DeviceFarmClient";
import { DeviceFarmPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateGetOfferingStatus: (
  config: DeviceFarmPaginationConfiguration,
  input: GetOfferingStatusCommandInput,
  ...rest: any[]
) => Paginator<GetOfferingStatusCommandOutput> = createPaginator<
  DeviceFarmPaginationConfiguration,
  GetOfferingStatusCommandInput,
  GetOfferingStatusCommandOutput
>(DeviceFarmClient, GetOfferingStatusCommand, "nextToken", "nextToken", "");
