// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  DescribeEffectivePatchesForPatchBaselineCommand,
  DescribeEffectivePatchesForPatchBaselineCommandInput,
  DescribeEffectivePatchesForPatchBaselineCommandOutput,
} from "../commands/DescribeEffectivePatchesForPatchBaselineCommand";
import { SSMClient } from "../SSMClient";
import { SSMPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateDescribeEffectivePatchesForPatchBaseline: (
  config: SSMPaginationConfiguration,
  input: DescribeEffectivePatchesForPatchBaselineCommandInput,
  ...rest: any[]
) => Paginator<DescribeEffectivePatchesForPatchBaselineCommandOutput> = createPaginator<
  SSMPaginationConfiguration,
  DescribeEffectivePatchesForPatchBaselineCommandInput,
  DescribeEffectivePatchesForPatchBaselineCommandOutput
>(SSMClient, DescribeEffectivePatchesForPatchBaselineCommand, "NextToken", "NextToken", "MaxResults");
