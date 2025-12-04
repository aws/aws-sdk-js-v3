// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  DescribeVolumesModificationsCommand,
  DescribeVolumesModificationsCommandInput,
  DescribeVolumesModificationsCommandOutput,
} from "../commands/DescribeVolumesModificationsCommand";
import { EC2Client } from "../EC2Client";
import { EC2PaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateDescribeVolumesModifications: (
  config: EC2PaginationConfiguration,
  input: DescribeVolumesModificationsCommandInput,
  ...rest: any[]
) => Paginator<DescribeVolumesModificationsCommandOutput> = createPaginator<
  EC2PaginationConfiguration,
  DescribeVolumesModificationsCommandInput,
  DescribeVolumesModificationsCommandOutput
>(EC2Client, DescribeVolumesModificationsCommand, "NextToken", "NextToken", "MaxResults");
