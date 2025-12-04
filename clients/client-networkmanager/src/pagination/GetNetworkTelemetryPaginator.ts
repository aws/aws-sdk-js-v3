// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  GetNetworkTelemetryCommand,
  GetNetworkTelemetryCommandInput,
  GetNetworkTelemetryCommandOutput,
} from "../commands/GetNetworkTelemetryCommand";
import { NetworkManagerClient } from "../NetworkManagerClient";
import { NetworkManagerPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateGetNetworkTelemetry: (
  config: NetworkManagerPaginationConfiguration,
  input: GetNetworkTelemetryCommandInput,
  ...rest: any[]
) => Paginator<GetNetworkTelemetryCommandOutput> = createPaginator<
  NetworkManagerPaginationConfiguration,
  GetNetworkTelemetryCommandInput,
  GetNetworkTelemetryCommandOutput
>(NetworkManagerClient, GetNetworkTelemetryCommand, "NextToken", "NextToken", "MaxResults");
