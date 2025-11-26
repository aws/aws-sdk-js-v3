// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  DescribeInstancePatchStatesCommand,
  DescribeInstancePatchStatesCommandInput,
  DescribeInstancePatchStatesCommandOutput,
} from "../commands/DescribeInstancePatchStatesCommand";
import { SSMClient } from "../SSMClient";
import { SSMPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateDescribeInstancePatchStates: (
  config: SSMPaginationConfiguration,
  input: DescribeInstancePatchStatesCommandInput,
  ...rest: any[]
) => Paginator<DescribeInstancePatchStatesCommandOutput> = createPaginator<
  SSMPaginationConfiguration,
  DescribeInstancePatchStatesCommandInput,
  DescribeInstancePatchStatesCommandOutput
>(SSMClient, DescribeInstancePatchStatesCommand, "NextToken", "NextToken", "MaxResults");
