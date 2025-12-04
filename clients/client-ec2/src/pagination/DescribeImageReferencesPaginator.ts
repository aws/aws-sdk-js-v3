// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  DescribeImageReferencesCommand,
  DescribeImageReferencesCommandInput,
  DescribeImageReferencesCommandOutput,
} from "../commands/DescribeImageReferencesCommand";
import { EC2Client } from "../EC2Client";
import { EC2PaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateDescribeImageReferences: (
  config: EC2PaginationConfiguration,
  input: DescribeImageReferencesCommandInput,
  ...rest: any[]
) => Paginator<DescribeImageReferencesCommandOutput> = createPaginator<
  EC2PaginationConfiguration,
  DescribeImageReferencesCommandInput,
  DescribeImageReferencesCommandOutput
>(EC2Client, DescribeImageReferencesCommand, "NextToken", "NextToken", "MaxResults");
