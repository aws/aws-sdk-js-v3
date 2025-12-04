// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  DescribeConfigurationAggregatorsCommand,
  DescribeConfigurationAggregatorsCommandInput,
  DescribeConfigurationAggregatorsCommandOutput,
} from "../commands/DescribeConfigurationAggregatorsCommand";
import { ConfigServiceClient } from "../ConfigServiceClient";
import { ConfigServicePaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateDescribeConfigurationAggregators: (
  config: ConfigServicePaginationConfiguration,
  input: DescribeConfigurationAggregatorsCommandInput,
  ...rest: any[]
) => Paginator<DescribeConfigurationAggregatorsCommandOutput> = createPaginator<
  ConfigServicePaginationConfiguration,
  DescribeConfigurationAggregatorsCommandInput,
  DescribeConfigurationAggregatorsCommandOutput
>(ConfigServiceClient, DescribeConfigurationAggregatorsCommand, "NextToken", "NextToken", "Limit");
