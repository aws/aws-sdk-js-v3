// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import { Paginator } from "@smithy/types";

import {
  DescribeInstanceImageMetadataCommand,
  DescribeInstanceImageMetadataCommandInput,
  DescribeInstanceImageMetadataCommandOutput,
} from "../commands/DescribeInstanceImageMetadataCommand";
import { EC2Client } from "../EC2Client";
import { EC2PaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateDescribeInstanceImageMetadata: (
  config: EC2PaginationConfiguration,
  input: DescribeInstanceImageMetadataCommandInput,
  ...rest: any[]
) => Paginator<DescribeInstanceImageMetadataCommandOutput> = createPaginator<
  EC2PaginationConfiguration,
  DescribeInstanceImageMetadataCommandInput,
  DescribeInstanceImageMetadataCommandOutput
>(EC2Client, DescribeInstanceImageMetadataCommand, "NextToken", "NextToken", "MaxResults");
