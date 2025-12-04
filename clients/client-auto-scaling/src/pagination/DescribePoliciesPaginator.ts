// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import { AutoScalingClient } from "../AutoScalingClient";
import {
  DescribePoliciesCommand,
  DescribePoliciesCommandInput,
  DescribePoliciesCommandOutput,
} from "../commands/DescribePoliciesCommand";
import { AutoScalingPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateDescribePolicies: (
  config: AutoScalingPaginationConfiguration,
  input: DescribePoliciesCommandInput,
  ...rest: any[]
) => Paginator<DescribePoliciesCommandOutput> = createPaginator<
  AutoScalingPaginationConfiguration,
  DescribePoliciesCommandInput,
  DescribePoliciesCommandOutput
>(AutoScalingClient, DescribePoliciesCommand, "NextToken", "NextToken", "MaxRecords");
