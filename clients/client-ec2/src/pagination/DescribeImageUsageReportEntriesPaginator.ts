// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import { Paginator } from "@smithy/types";

import {
  DescribeImageUsageReportEntriesCommand,
  DescribeImageUsageReportEntriesCommandInput,
  DescribeImageUsageReportEntriesCommandOutput,
} from "../commands/DescribeImageUsageReportEntriesCommand";
import { EC2Client } from "../EC2Client";
import { EC2PaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateDescribeImageUsageReportEntries: (
  config: EC2PaginationConfiguration,
  input: DescribeImageUsageReportEntriesCommandInput,
  ...rest: any[]
) => Paginator<DescribeImageUsageReportEntriesCommandOutput> = createPaginator<
  EC2PaginationConfiguration,
  DescribeImageUsageReportEntriesCommandInput,
  DescribeImageUsageReportEntriesCommandOutput
>(EC2Client, DescribeImageUsageReportEntriesCommand, "NextToken", "NextToken", "MaxResults");
