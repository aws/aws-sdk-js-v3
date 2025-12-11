// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  DescribeReplicationConfigurationsCommand,
  DescribeReplicationConfigurationsCommandInput,
  DescribeReplicationConfigurationsCommandOutput,
} from "../commands/DescribeReplicationConfigurationsCommand";
import { EFSClient } from "../EFSClient";
import { EFSPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateDescribeReplicationConfigurations: (
  config: EFSPaginationConfiguration,
  input: DescribeReplicationConfigurationsCommandInput,
  ...rest: any[]
) => Paginator<DescribeReplicationConfigurationsCommandOutput> = createPaginator<
  EFSPaginationConfiguration,
  DescribeReplicationConfigurationsCommandInput,
  DescribeReplicationConfigurationsCommandOutput
>(EFSClient, DescribeReplicationConfigurationsCommand, "NextToken", "NextToken", "MaxResults");
