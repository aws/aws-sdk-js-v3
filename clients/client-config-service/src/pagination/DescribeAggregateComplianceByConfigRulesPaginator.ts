// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  DescribeAggregateComplianceByConfigRulesCommand,
  DescribeAggregateComplianceByConfigRulesCommandInput,
  DescribeAggregateComplianceByConfigRulesCommandOutput,
} from "../commands/DescribeAggregateComplianceByConfigRulesCommand";
import { ConfigServiceClient } from "../ConfigServiceClient";
import { ConfigServicePaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateDescribeAggregateComplianceByConfigRules: (
  config: ConfigServicePaginationConfiguration,
  input: DescribeAggregateComplianceByConfigRulesCommandInput,
  ...rest: any[]
) => Paginator<DescribeAggregateComplianceByConfigRulesCommandOutput> = createPaginator<
  ConfigServicePaginationConfiguration,
  DescribeAggregateComplianceByConfigRulesCommandInput,
  DescribeAggregateComplianceByConfigRulesCommandOutput
>(ConfigServiceClient, DescribeAggregateComplianceByConfigRulesCommand, "NextToken", "NextToken", "Limit");
