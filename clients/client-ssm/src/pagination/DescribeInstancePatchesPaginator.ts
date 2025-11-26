// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  DescribeInstancePatchesCommand,
  DescribeInstancePatchesCommandInput,
  DescribeInstancePatchesCommandOutput,
} from "../commands/DescribeInstancePatchesCommand";
import { SSMClient } from "../SSMClient";
import { SSMPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateDescribeInstancePatches: (
  config: SSMPaginationConfiguration,
  input: DescribeInstancePatchesCommandInput,
  ...rest: any[]
) => Paginator<DescribeInstancePatchesCommandOutput> = createPaginator<
  SSMPaginationConfiguration,
  DescribeInstancePatchesCommandInput,
  DescribeInstancePatchesCommandOutput
>(SSMClient, DescribeInstancePatchesCommand, "NextToken", "NextToken", "MaxResults");
