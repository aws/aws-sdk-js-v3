// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  DescribeConfigurationAggregatorSourcesStatusCommand,
  DescribeConfigurationAggregatorSourcesStatusCommandInput,
  DescribeConfigurationAggregatorSourcesStatusCommandOutput,
} from "../commands/DescribeConfigurationAggregatorSourcesStatusCommand";
import { ConfigServiceClient } from "../ConfigServiceClient";
import { ConfigServicePaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateDescribeConfigurationAggregatorSourcesStatus: (
  config: ConfigServicePaginationConfiguration,
  input: DescribeConfigurationAggregatorSourcesStatusCommandInput,
  ...rest: any[]
) => Paginator<DescribeConfigurationAggregatorSourcesStatusCommandOutput> = createPaginator<
  ConfigServicePaginationConfiguration,
  DescribeConfigurationAggregatorSourcesStatusCommandInput,
  DescribeConfigurationAggregatorSourcesStatusCommandOutput
>(ConfigServiceClient, DescribeConfigurationAggregatorSourcesStatusCommand, "NextToken", "NextToken", "Limit");
