// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  DescribeIamInstanceProfileAssociationsCommand,
  DescribeIamInstanceProfileAssociationsCommandInput,
  DescribeIamInstanceProfileAssociationsCommandOutput,
} from "../commands/DescribeIamInstanceProfileAssociationsCommand";
import { EC2Client } from "../EC2Client";
import { EC2PaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateDescribeIamInstanceProfileAssociations: (
  config: EC2PaginationConfiguration,
  input: DescribeIamInstanceProfileAssociationsCommandInput,
  ...rest: any[]
) => Paginator<DescribeIamInstanceProfileAssociationsCommandOutput> = createPaginator<
  EC2PaginationConfiguration,
  DescribeIamInstanceProfileAssociationsCommandInput,
  DescribeIamInstanceProfileAssociationsCommandOutput
>(EC2Client, DescribeIamInstanceProfileAssociationsCommand, "NextToken", "NextToken", "MaxResults");
