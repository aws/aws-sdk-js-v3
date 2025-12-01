// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  DescribeRetentionConfigurationsCommand,
  DescribeRetentionConfigurationsCommandInput,
  DescribeRetentionConfigurationsCommandOutput,
} from "../commands/DescribeRetentionConfigurationsCommand";
import { ConfigServiceClient } from "../ConfigServiceClient";
import { ConfigServicePaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateDescribeRetentionConfigurations: (
  config: ConfigServicePaginationConfiguration,
  input: DescribeRetentionConfigurationsCommandInput,
  ...rest: any[]
) => Paginator<DescribeRetentionConfigurationsCommandOutput> = createPaginator<
  ConfigServicePaginationConfiguration,
  DescribeRetentionConfigurationsCommandInput,
  DescribeRetentionConfigurationsCommandOutput
>(ConfigServiceClient, DescribeRetentionConfigurationsCommand, "NextToken", "NextToken", "");
