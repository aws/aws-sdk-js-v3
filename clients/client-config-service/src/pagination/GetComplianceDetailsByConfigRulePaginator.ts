// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  GetComplianceDetailsByConfigRuleCommand,
  GetComplianceDetailsByConfigRuleCommandInput,
  GetComplianceDetailsByConfigRuleCommandOutput,
} from "../commands/GetComplianceDetailsByConfigRuleCommand";
import { ConfigServiceClient } from "../ConfigServiceClient";
import { ConfigServicePaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateGetComplianceDetailsByConfigRule: (
  config: ConfigServicePaginationConfiguration,
  input: GetComplianceDetailsByConfigRuleCommandInput,
  ...rest: any[]
) => Paginator<GetComplianceDetailsByConfigRuleCommandOutput> = createPaginator<
  ConfigServicePaginationConfiguration,
  GetComplianceDetailsByConfigRuleCommandInput,
  GetComplianceDetailsByConfigRuleCommandOutput
>(ConfigServiceClient, GetComplianceDetailsByConfigRuleCommand, "NextToken", "NextToken", "Limit");
