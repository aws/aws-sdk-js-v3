// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  DescribeImagesCommand,
  DescribeImagesCommandInput,
  DescribeImagesCommandOutput,
} from "../commands/DescribeImagesCommand";
import { EC2Client } from "../EC2Client";
import { EC2PaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateDescribeImages: (
  config: EC2PaginationConfiguration,
  input: DescribeImagesCommandInput,
  ...rest: any[]
) => Paginator<DescribeImagesCommandOutput> = createPaginator<
  EC2PaginationConfiguration,
  DescribeImagesCommandInput,
  DescribeImagesCommandOutput
>(EC2Client, DescribeImagesCommand, "NextToken", "NextToken", "MaxResults");
