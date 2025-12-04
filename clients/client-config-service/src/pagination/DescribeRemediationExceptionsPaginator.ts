// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  DescribeRemediationExceptionsCommand,
  DescribeRemediationExceptionsCommandInput,
  DescribeRemediationExceptionsCommandOutput,
} from "../commands/DescribeRemediationExceptionsCommand";
import { ConfigServiceClient } from "../ConfigServiceClient";
import { ConfigServicePaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateDescribeRemediationExceptions: (
  config: ConfigServicePaginationConfiguration,
  input: DescribeRemediationExceptionsCommandInput,
  ...rest: any[]
) => Paginator<DescribeRemediationExceptionsCommandOutput> = createPaginator<
  ConfigServicePaginationConfiguration,
  DescribeRemediationExceptionsCommandInput,
  DescribeRemediationExceptionsCommandOutput
>(ConfigServiceClient, DescribeRemediationExceptionsCommand, "NextToken", "NextToken", "Limit");
