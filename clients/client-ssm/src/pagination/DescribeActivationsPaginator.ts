// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  DescribeActivationsCommand,
  DescribeActivationsCommandInput,
  DescribeActivationsCommandOutput,
} from "../commands/DescribeActivationsCommand";
import { SSMClient } from "../SSMClient";
import { SSMPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateDescribeActivations: (
  config: SSMPaginationConfiguration,
  input: DescribeActivationsCommandInput,
  ...rest: any[]
) => Paginator<DescribeActivationsCommandOutput> = createPaginator<
  SSMPaginationConfiguration,
  DescribeActivationsCommandInput,
  DescribeActivationsCommandOutput
>(SSMClient, DescribeActivationsCommand, "NextToken", "NextToken", "MaxResults");
