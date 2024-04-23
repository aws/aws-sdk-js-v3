// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import { Paginator } from "@smithy/types";

import {
  DescribeBackupsCommand,
  DescribeBackupsCommandInput,
  DescribeBackupsCommandOutput,
} from "../commands/DescribeBackupsCommand";
import { OpsWorksCMClient } from "../OpsWorksCMClient";
import { OpsWorksCMPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateDescribeBackups: (
  config: OpsWorksCMPaginationConfiguration,
  input: DescribeBackupsCommandInput,
  ...rest: any[]
) => Paginator<DescribeBackupsCommandOutput> = createPaginator<
  OpsWorksCMPaginationConfiguration,
  DescribeBackupsCommandInput,
  DescribeBackupsCommandOutput
>(OpsWorksCMClient, DescribeBackupsCommand, "NextToken", "NextToken", "MaxResults");
