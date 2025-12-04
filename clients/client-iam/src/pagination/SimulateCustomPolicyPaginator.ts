// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  SimulateCustomPolicyCommand,
  SimulateCustomPolicyCommandInput,
  SimulateCustomPolicyCommandOutput,
} from "../commands/SimulateCustomPolicyCommand";
import { IAMClient } from "../IAMClient";
import { IAMPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateSimulateCustomPolicy: (
  config: IAMPaginationConfiguration,
  input: SimulateCustomPolicyCommandInput,
  ...rest: any[]
) => Paginator<SimulateCustomPolicyCommandOutput> = createPaginator<
  IAMPaginationConfiguration,
  SimulateCustomPolicyCommandInput,
  SimulateCustomPolicyCommandOutput
>(IAMClient, SimulateCustomPolicyCommand, "Marker", "Marker", "MaxItems");
