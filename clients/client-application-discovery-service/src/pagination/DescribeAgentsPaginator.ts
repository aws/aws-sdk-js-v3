// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import { ApplicationDiscoveryServiceClient } from "../ApplicationDiscoveryServiceClient";
import {
  DescribeAgentsCommand,
  DescribeAgentsCommandInput,
  DescribeAgentsCommandOutput,
} from "../commands/DescribeAgentsCommand";
import { ApplicationDiscoveryServicePaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateDescribeAgents: (
  config: ApplicationDiscoveryServicePaginationConfiguration,
  input: DescribeAgentsCommandInput,
  ...rest: any[]
) => Paginator<DescribeAgentsCommandOutput> = createPaginator<
  ApplicationDiscoveryServicePaginationConfiguration,
  DescribeAgentsCommandInput,
  DescribeAgentsCommandOutput
>(ApplicationDiscoveryServiceClient, DescribeAgentsCommand, "nextToken", "nextToken", "maxResults");
