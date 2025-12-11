// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  DescribeOpsItemsCommand,
  DescribeOpsItemsCommandInput,
  DescribeOpsItemsCommandOutput,
} from "../commands/DescribeOpsItemsCommand";
import { SSMClient } from "../SSMClient";
import { SSMPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateDescribeOpsItems: (
  config: SSMPaginationConfiguration,
  input: DescribeOpsItemsCommandInput,
  ...rest: any[]
) => Paginator<DescribeOpsItemsCommandOutput> = createPaginator<
  SSMPaginationConfiguration,
  DescribeOpsItemsCommandInput,
  DescribeOpsItemsCommandOutput
>(SSMClient, DescribeOpsItemsCommand, "NextToken", "NextToken", "MaxResults");
