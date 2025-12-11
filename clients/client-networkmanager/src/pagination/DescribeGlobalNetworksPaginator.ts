// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  DescribeGlobalNetworksCommand,
  DescribeGlobalNetworksCommandInput,
  DescribeGlobalNetworksCommandOutput,
} from "../commands/DescribeGlobalNetworksCommand";
import { NetworkManagerClient } from "../NetworkManagerClient";
import { NetworkManagerPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateDescribeGlobalNetworks: (
  config: NetworkManagerPaginationConfiguration,
  input: DescribeGlobalNetworksCommandInput,
  ...rest: any[]
) => Paginator<DescribeGlobalNetworksCommandOutput> = createPaginator<
  NetworkManagerPaginationConfiguration,
  DescribeGlobalNetworksCommandInput,
  DescribeGlobalNetworksCommandOutput
>(NetworkManagerClient, DescribeGlobalNetworksCommand, "NextToken", "NextToken", "MaxResults");
