// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  DescribeInstancePatchStatesForPatchGroupCommand,
  DescribeInstancePatchStatesForPatchGroupCommandInput,
  DescribeInstancePatchStatesForPatchGroupCommandOutput,
} from "../commands/DescribeInstancePatchStatesForPatchGroupCommand";
import { SSMClient } from "../SSMClient";
import { SSMPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateDescribeInstancePatchStatesForPatchGroup: (
  config: SSMPaginationConfiguration,
  input: DescribeInstancePatchStatesForPatchGroupCommandInput,
  ...rest: any[]
) => Paginator<DescribeInstancePatchStatesForPatchGroupCommandOutput> = createPaginator<
  SSMPaginationConfiguration,
  DescribeInstancePatchStatesForPatchGroupCommandInput,
  DescribeInstancePatchStatesForPatchGroupCommandOutput
>(SSMClient, DescribeInstancePatchStatesForPatchGroupCommand, "NextToken", "NextToken", "MaxResults");
