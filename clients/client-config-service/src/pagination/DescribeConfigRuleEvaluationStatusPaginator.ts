// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  DescribeConfigRuleEvaluationStatusCommand,
  DescribeConfigRuleEvaluationStatusCommandInput,
  DescribeConfigRuleEvaluationStatusCommandOutput,
} from "../commands/DescribeConfigRuleEvaluationStatusCommand";
import { ConfigServiceClient } from "../ConfigServiceClient";
import { ConfigServicePaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateDescribeConfigRuleEvaluationStatus: (
  config: ConfigServicePaginationConfiguration,
  input: DescribeConfigRuleEvaluationStatusCommandInput,
  ...rest: any[]
) => Paginator<DescribeConfigRuleEvaluationStatusCommandOutput> = createPaginator<
  ConfigServicePaginationConfiguration,
  DescribeConfigRuleEvaluationStatusCommandInput,
  DescribeConfigRuleEvaluationStatusCommandOutput
>(ConfigServiceClient, DescribeConfigRuleEvaluationStatusCommand, "NextToken", "NextToken", "Limit");
