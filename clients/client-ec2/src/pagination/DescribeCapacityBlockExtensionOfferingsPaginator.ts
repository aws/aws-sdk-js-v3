// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  DescribeCapacityBlockExtensionOfferingsCommand,
  DescribeCapacityBlockExtensionOfferingsCommandInput,
  DescribeCapacityBlockExtensionOfferingsCommandOutput,
} from "../commands/DescribeCapacityBlockExtensionOfferingsCommand";
import { EC2Client } from "../EC2Client";
import { EC2PaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateDescribeCapacityBlockExtensionOfferings: (
  config: EC2PaginationConfiguration,
  input: DescribeCapacityBlockExtensionOfferingsCommandInput,
  ...rest: any[]
) => Paginator<DescribeCapacityBlockExtensionOfferingsCommandOutput> = createPaginator<
  EC2PaginationConfiguration,
  DescribeCapacityBlockExtensionOfferingsCommandInput,
  DescribeCapacityBlockExtensionOfferingsCommandOutput
>(EC2Client, DescribeCapacityBlockExtensionOfferingsCommand, "NextToken", "NextToken", "MaxResults");
