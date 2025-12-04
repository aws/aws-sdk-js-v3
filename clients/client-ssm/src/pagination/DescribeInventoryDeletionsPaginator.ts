// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  DescribeInventoryDeletionsCommand,
  DescribeInventoryDeletionsCommandInput,
  DescribeInventoryDeletionsCommandOutput,
} from "../commands/DescribeInventoryDeletionsCommand";
import { SSMClient } from "../SSMClient";
import { SSMPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateDescribeInventoryDeletions: (
  config: SSMPaginationConfiguration,
  input: DescribeInventoryDeletionsCommandInput,
  ...rest: any[]
) => Paginator<DescribeInventoryDeletionsCommandOutput> = createPaginator<
  SSMPaginationConfiguration,
  DescribeInventoryDeletionsCommandInput,
  DescribeInventoryDeletionsCommandOutput
>(SSMClient, DescribeInventoryDeletionsCommand, "NextToken", "NextToken", "MaxResults");
