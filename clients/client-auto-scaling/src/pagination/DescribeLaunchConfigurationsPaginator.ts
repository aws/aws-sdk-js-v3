// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import { AutoScalingClient } from "../AutoScalingClient";
import {
  DescribeLaunchConfigurationsCommand,
  DescribeLaunchConfigurationsCommandInput,
  DescribeLaunchConfigurationsCommandOutput,
} from "../commands/DescribeLaunchConfigurationsCommand";
import { AutoScalingPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateDescribeLaunchConfigurations: (
  config: AutoScalingPaginationConfiguration,
  input: DescribeLaunchConfigurationsCommandInput,
  ...rest: any[]
) => Paginator<DescribeLaunchConfigurationsCommandOutput> = createPaginator<
  AutoScalingPaginationConfiguration,
  DescribeLaunchConfigurationsCommandInput,
  DescribeLaunchConfigurationsCommandOutput
>(AutoScalingClient, DescribeLaunchConfigurationsCommand, "NextToken", "NextToken", "MaxRecords");
