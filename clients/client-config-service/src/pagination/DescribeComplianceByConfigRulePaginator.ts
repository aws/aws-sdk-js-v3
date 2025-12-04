// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  DescribeComplianceByConfigRuleCommand,
  DescribeComplianceByConfigRuleCommandInput,
  DescribeComplianceByConfigRuleCommandOutput,
} from "../commands/DescribeComplianceByConfigRuleCommand";
import { ConfigServiceClient } from "../ConfigServiceClient";
import { ConfigServicePaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateDescribeComplianceByConfigRule: (
  config: ConfigServicePaginationConfiguration,
  input: DescribeComplianceByConfigRuleCommandInput,
  ...rest: any[]
) => Paginator<DescribeComplianceByConfigRuleCommandOutput> = createPaginator<
  ConfigServicePaginationConfiguration,
  DescribeComplianceByConfigRuleCommandInput,
  DescribeComplianceByConfigRuleCommandOutput
>(ConfigServiceClient, DescribeComplianceByConfigRuleCommand, "NextToken", "NextToken", "");
