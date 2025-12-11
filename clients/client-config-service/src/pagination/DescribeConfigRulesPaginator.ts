// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  DescribeConfigRulesCommand,
  DescribeConfigRulesCommandInput,
  DescribeConfigRulesCommandOutput,
} from "../commands/DescribeConfigRulesCommand";
import { ConfigServiceClient } from "../ConfigServiceClient";
import { ConfigServicePaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateDescribeConfigRules: (
  config: ConfigServicePaginationConfiguration,
  input: DescribeConfigRulesCommandInput,
  ...rest: any[]
) => Paginator<DescribeConfigRulesCommandOutput> = createPaginator<
  ConfigServicePaginationConfiguration,
  DescribeConfigRulesCommandInput,
  DescribeConfigRulesCommandOutput
>(ConfigServiceClient, DescribeConfigRulesCommand, "NextToken", "NextToken", "");
