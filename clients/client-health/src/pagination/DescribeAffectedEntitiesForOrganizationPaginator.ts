// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  DescribeAffectedEntitiesForOrganizationCommand,
  DescribeAffectedEntitiesForOrganizationCommandInput,
  DescribeAffectedEntitiesForOrganizationCommandOutput,
} from "../commands/DescribeAffectedEntitiesForOrganizationCommand";
import { HealthClient } from "../HealthClient";
import { HealthPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateDescribeAffectedEntitiesForOrganization: (
  config: HealthPaginationConfiguration,
  input: DescribeAffectedEntitiesForOrganizationCommandInput,
  ...rest: any[]
) => Paginator<DescribeAffectedEntitiesForOrganizationCommandOutput> = createPaginator<
  HealthPaginationConfiguration,
  DescribeAffectedEntitiesForOrganizationCommandInput,
  DescribeAffectedEntitiesForOrganizationCommandOutput
>(HealthClient, DescribeAffectedEntitiesForOrganizationCommand, "nextToken", "nextToken", "maxResults");
