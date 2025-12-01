// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  DescribeEventsForOrganizationCommand,
  DescribeEventsForOrganizationCommandInput,
  DescribeEventsForOrganizationCommandOutput,
} from "../commands/DescribeEventsForOrganizationCommand";
import { HealthClient } from "../HealthClient";
import { HealthPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateDescribeEventsForOrganization: (
  config: HealthPaginationConfiguration,
  input: DescribeEventsForOrganizationCommandInput,
  ...rest: any[]
) => Paginator<DescribeEventsForOrganizationCommandOutput> = createPaginator<
  HealthPaginationConfiguration,
  DescribeEventsForOrganizationCommandInput,
  DescribeEventsForOrganizationCommandOutput
>(HealthClient, DescribeEventsForOrganizationCommand, "nextToken", "nextToken", "maxResults");
