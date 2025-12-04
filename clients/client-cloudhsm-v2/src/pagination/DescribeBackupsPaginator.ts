// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import { CloudHSMV2Client } from "../CloudHSMV2Client";
import {
  DescribeBackupsCommand,
  DescribeBackupsCommandInput,
  DescribeBackupsCommandOutput,
} from "../commands/DescribeBackupsCommand";
import { CloudHSMV2PaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateDescribeBackups: (
  config: CloudHSMV2PaginationConfiguration,
  input: DescribeBackupsCommandInput,
  ...rest: any[]
) => Paginator<DescribeBackupsCommandOutput> = createPaginator<
  CloudHSMV2PaginationConfiguration,
  DescribeBackupsCommandInput,
  DescribeBackupsCommandOutput
>(CloudHSMV2Client, DescribeBackupsCommand, "NextToken", "NextToken", "MaxResults");
