// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  DescribeSessionsCommand,
  DescribeSessionsCommandInput,
  DescribeSessionsCommandOutput,
} from "../commands/DescribeSessionsCommand";
import { SSMClient } from "../SSMClient";
import { SSMPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateDescribeSessions: (
  config: SSMPaginationConfiguration,
  input: DescribeSessionsCommandInput,
  ...rest: any[]
) => Paginator<DescribeSessionsCommandOutput> = createPaginator<
  SSMPaginationConfiguration,
  DescribeSessionsCommandInput,
  DescribeSessionsCommandOutput
>(SSMClient, DescribeSessionsCommand, "NextToken", "NextToken", "MaxResults");
