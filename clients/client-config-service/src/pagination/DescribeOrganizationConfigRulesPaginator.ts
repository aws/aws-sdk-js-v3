// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  DescribeOrganizationConfigRulesCommand,
  DescribeOrganizationConfigRulesCommandInput,
  DescribeOrganizationConfigRulesCommandOutput,
} from "../commands/DescribeOrganizationConfigRulesCommand";
import { ConfigServiceClient } from "../ConfigServiceClient";
import { ConfigServicePaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateDescribeOrganizationConfigRules: (
  config: ConfigServicePaginationConfiguration,
  input: DescribeOrganizationConfigRulesCommandInput,
  ...rest: any[]
) => Paginator<DescribeOrganizationConfigRulesCommandOutput> = createPaginator<
  ConfigServicePaginationConfiguration,
  DescribeOrganizationConfigRulesCommandInput,
  DescribeOrganizationConfigRulesCommandOutput
>(ConfigServiceClient, DescribeOrganizationConfigRulesCommand, "NextToken", "NextToken", "Limit");
