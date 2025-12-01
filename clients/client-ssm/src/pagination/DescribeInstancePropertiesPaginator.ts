// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  DescribeInstancePropertiesCommand,
  DescribeInstancePropertiesCommandInput,
  DescribeInstancePropertiesCommandOutput,
} from "../commands/DescribeInstancePropertiesCommand";
import { SSMClient } from "../SSMClient";
import { SSMPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateDescribeInstanceProperties: (
  config: SSMPaginationConfiguration,
  input: DescribeInstancePropertiesCommandInput,
  ...rest: any[]
) => Paginator<DescribeInstancePropertiesCommandOutput> = createPaginator<
  SSMPaginationConfiguration,
  DescribeInstancePropertiesCommandInput,
  DescribeInstancePropertiesCommandOutput
>(SSMClient, DescribeInstancePropertiesCommand, "NextToken", "NextToken", "MaxResults");
