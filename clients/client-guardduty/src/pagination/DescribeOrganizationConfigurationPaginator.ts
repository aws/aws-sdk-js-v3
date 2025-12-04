// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  DescribeOrganizationConfigurationCommand,
  DescribeOrganizationConfigurationCommandInput,
  DescribeOrganizationConfigurationCommandOutput,
} from "../commands/DescribeOrganizationConfigurationCommand";
import { GuardDutyClient } from "../GuardDutyClient";
import { GuardDutyPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateDescribeOrganizationConfiguration: (
  config: GuardDutyPaginationConfiguration,
  input: DescribeOrganizationConfigurationCommandInput,
  ...rest: any[]
) => Paginator<DescribeOrganizationConfigurationCommandOutput> = createPaginator<
  GuardDutyPaginationConfiguration,
  DescribeOrganizationConfigurationCommandInput,
  DescribeOrganizationConfigurationCommandOutput
>(GuardDutyClient, DescribeOrganizationConfigurationCommand, "NextToken", "NextToken", "MaxResults");
