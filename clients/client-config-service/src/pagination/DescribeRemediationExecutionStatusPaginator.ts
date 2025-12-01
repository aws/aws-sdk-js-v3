// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  DescribeRemediationExecutionStatusCommand,
  DescribeRemediationExecutionStatusCommandInput,
  DescribeRemediationExecutionStatusCommandOutput,
} from "../commands/DescribeRemediationExecutionStatusCommand";
import { ConfigServiceClient } from "../ConfigServiceClient";
import { ConfigServicePaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateDescribeRemediationExecutionStatus: (
  config: ConfigServicePaginationConfiguration,
  input: DescribeRemediationExecutionStatusCommandInput,
  ...rest: any[]
) => Paginator<DescribeRemediationExecutionStatusCommandOutput> = createPaginator<
  ConfigServicePaginationConfiguration,
  DescribeRemediationExecutionStatusCommandInput,
  DescribeRemediationExecutionStatusCommandOutput
>(ConfigServiceClient, DescribeRemediationExecutionStatusCommand, "NextToken", "NextToken", "Limit");
