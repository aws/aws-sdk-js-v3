// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  DescribeClusterPeersCommand,
  DescribeClusterPeersCommandInput,
  DescribeClusterPeersCommandOutput,
} from "../commands/DescribeClusterPeersCommand";
import { FSxClient } from "../FSxClient";
import type { FSxPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateDescribeClusterPeers: (
  config: FSxPaginationConfiguration,
  input: DescribeClusterPeersCommandInput,
  ...rest: any[]
) => Paginator<DescribeClusterPeersCommandOutput> = createPaginator<
  FSxPaginationConfiguration,
  DescribeClusterPeersCommandInput,
  DescribeClusterPeersCommandOutput
>(FSxClient, DescribeClusterPeersCommand, "NextToken", "NextToken", "MaxResults");
