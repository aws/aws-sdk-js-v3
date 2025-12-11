// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  DescribeVerifiedAccessTrustProvidersCommand,
  DescribeVerifiedAccessTrustProvidersCommandInput,
  DescribeVerifiedAccessTrustProvidersCommandOutput,
} from "../commands/DescribeVerifiedAccessTrustProvidersCommand";
import { EC2Client } from "../EC2Client";
import { EC2PaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateDescribeVerifiedAccessTrustProviders: (
  config: EC2PaginationConfiguration,
  input: DescribeVerifiedAccessTrustProvidersCommandInput,
  ...rest: any[]
) => Paginator<DescribeVerifiedAccessTrustProvidersCommandOutput> = createPaginator<
  EC2PaginationConfiguration,
  DescribeVerifiedAccessTrustProvidersCommandInput,
  DescribeVerifiedAccessTrustProvidersCommandOutput
>(EC2Client, DescribeVerifiedAccessTrustProvidersCommand, "NextToken", "NextToken", "MaxResults");
