// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  DescribeServicesCommand,
  DescribeServicesCommandInput,
  DescribeServicesCommandOutput,
} from "../commands/DescribeServicesCommand";
import { PricingClient } from "../PricingClient";
import { PricingPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateDescribeServices: (
  config: PricingPaginationConfiguration,
  input: DescribeServicesCommandInput,
  ...rest: any[]
) => Paginator<DescribeServicesCommandOutput> = createPaginator<
  PricingPaginationConfiguration,
  DescribeServicesCommandInput,
  DescribeServicesCommandOutput
>(PricingClient, DescribeServicesCommand, "NextToken", "NextToken", "MaxResults");
