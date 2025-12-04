// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  GetAggregateComplianceDetailsByConfigRuleCommand,
  GetAggregateComplianceDetailsByConfigRuleCommandInput,
  GetAggregateComplianceDetailsByConfigRuleCommandOutput,
} from "../commands/GetAggregateComplianceDetailsByConfigRuleCommand";
import { ConfigServiceClient } from "../ConfigServiceClient";
import { ConfigServicePaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateGetAggregateComplianceDetailsByConfigRule: (
  config: ConfigServicePaginationConfiguration,
  input: GetAggregateComplianceDetailsByConfigRuleCommandInput,
  ...rest: any[]
) => Paginator<GetAggregateComplianceDetailsByConfigRuleCommandOutput> = createPaginator<
  ConfigServicePaginationConfiguration,
  GetAggregateComplianceDetailsByConfigRuleCommandInput,
  GetAggregateComplianceDetailsByConfigRuleCommandOutput
>(ConfigServiceClient, GetAggregateComplianceDetailsByConfigRuleCommand, "NextToken", "NextToken", "Limit");
