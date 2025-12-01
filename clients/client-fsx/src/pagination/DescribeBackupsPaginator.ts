// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  DescribeBackupsCommand,
  DescribeBackupsCommandInput,
  DescribeBackupsCommandOutput,
} from "../commands/DescribeBackupsCommand";
import { FSxClient } from "../FSxClient";
import { FSxPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateDescribeBackups: (
  config: FSxPaginationConfiguration,
  input: DescribeBackupsCommandInput,
  ...rest: any[]
) => Paginator<DescribeBackupsCommandOutput> = createPaginator<
  FSxPaginationConfiguration,
  DescribeBackupsCommandInput,
  DescribeBackupsCommandOutput
>(FSxClient, DescribeBackupsCommand, "NextToken", "NextToken", "MaxResults");
