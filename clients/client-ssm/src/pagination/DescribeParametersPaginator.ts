// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  DescribeParametersCommand,
  DescribeParametersCommandInput,
  DescribeParametersCommandOutput,
} from "../commands/DescribeParametersCommand";
import { SSMClient } from "../SSMClient";
import { SSMPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateDescribeParameters: (
  config: SSMPaginationConfiguration,
  input: DescribeParametersCommandInput,
  ...rest: any[]
) => Paginator<DescribeParametersCommandOutput> = createPaginator<
  SSMPaginationConfiguration,
  DescribeParametersCommandInput,
  DescribeParametersCommandOutput
>(SSMClient, DescribeParametersCommand, "NextToken", "NextToken", "MaxResults");
