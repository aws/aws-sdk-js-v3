// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  GetInstancesHealthStatusCommand,
  GetInstancesHealthStatusCommandInput,
  GetInstancesHealthStatusCommandOutput,
} from "../commands/GetInstancesHealthStatusCommand";
import { ServiceDiscoveryClient } from "../ServiceDiscoveryClient";
import { ServiceDiscoveryPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateGetInstancesHealthStatus: (
  config: ServiceDiscoveryPaginationConfiguration,
  input: GetInstancesHealthStatusCommandInput,
  ...rest: any[]
) => Paginator<GetInstancesHealthStatusCommandOutput> = createPaginator<
  ServiceDiscoveryPaginationConfiguration,
  GetInstancesHealthStatusCommandInput,
  GetInstancesHealthStatusCommandOutput
>(ServiceDiscoveryClient, GetInstancesHealthStatusCommand, "NextToken", "NextToken", "MaxResults");
