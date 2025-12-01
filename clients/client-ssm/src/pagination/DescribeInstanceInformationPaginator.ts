// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  DescribeInstanceInformationCommand,
  DescribeInstanceInformationCommandInput,
  DescribeInstanceInformationCommandOutput,
} from "../commands/DescribeInstanceInformationCommand";
import { SSMClient } from "../SSMClient";
import { SSMPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateDescribeInstanceInformation: (
  config: SSMPaginationConfiguration,
  input: DescribeInstanceInformationCommandInput,
  ...rest: any[]
) => Paginator<DescribeInstanceInformationCommandOutput> = createPaginator<
  SSMPaginationConfiguration,
  DescribeInstanceInformationCommandInput,
  DescribeInstanceInformationCommandOutput
>(SSMClient, DescribeInstanceInformationCommand, "NextToken", "NextToken", "MaxResults");
