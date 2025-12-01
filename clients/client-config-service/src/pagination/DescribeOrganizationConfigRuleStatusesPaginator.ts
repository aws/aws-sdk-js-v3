// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  DescribeOrganizationConfigRuleStatusesCommand,
  DescribeOrganizationConfigRuleStatusesCommandInput,
  DescribeOrganizationConfigRuleStatusesCommandOutput,
} from "../commands/DescribeOrganizationConfigRuleStatusesCommand";
import { ConfigServiceClient } from "../ConfigServiceClient";
import { ConfigServicePaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateDescribeOrganizationConfigRuleStatuses: (
  config: ConfigServicePaginationConfiguration,
  input: DescribeOrganizationConfigRuleStatusesCommandInput,
  ...rest: any[]
) => Paginator<DescribeOrganizationConfigRuleStatusesCommandOutput> = createPaginator<
  ConfigServicePaginationConfiguration,
  DescribeOrganizationConfigRuleStatusesCommandInput,
  DescribeOrganizationConfigRuleStatusesCommandOutput
>(ConfigServiceClient, DescribeOrganizationConfigRuleStatusesCommand, "NextToken", "NextToken", "Limit");
