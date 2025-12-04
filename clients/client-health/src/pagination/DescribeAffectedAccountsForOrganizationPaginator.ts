// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  DescribeAffectedAccountsForOrganizationCommand,
  DescribeAffectedAccountsForOrganizationCommandInput,
  DescribeAffectedAccountsForOrganizationCommandOutput,
} from "../commands/DescribeAffectedAccountsForOrganizationCommand";
import { HealthClient } from "../HealthClient";
import { HealthPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateDescribeAffectedAccountsForOrganization: (
  config: HealthPaginationConfiguration,
  input: DescribeAffectedAccountsForOrganizationCommandInput,
  ...rest: any[]
) => Paginator<DescribeAffectedAccountsForOrganizationCommandOutput> = createPaginator<
  HealthPaginationConfiguration,
  DescribeAffectedAccountsForOrganizationCommandInput,
  DescribeAffectedAccountsForOrganizationCommandOutput
>(HealthClient, DescribeAffectedAccountsForOrganizationCommand, "nextToken", "nextToken", "maxResults");
