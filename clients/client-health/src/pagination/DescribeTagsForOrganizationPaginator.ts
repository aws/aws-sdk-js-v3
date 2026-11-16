// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  DescribeTagsForOrganizationCommand,
  DescribeTagsForOrganizationCommandInput,
  DescribeTagsForOrganizationCommandOutput,
} from "../commands/DescribeTagsForOrganizationCommand";
import { HealthClient } from "../HealthClient";
import type { HealthPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateDescribeTagsForOrganization: (
  config: HealthPaginationConfiguration,
  input: DescribeTagsForOrganizationCommandInput,
  ...rest: any[]
) => Paginator<DescribeTagsForOrganizationCommandOutput> = createPaginator<
  HealthPaginationConfiguration,
  DescribeTagsForOrganizationCommandInput,
  DescribeTagsForOrganizationCommandOutput
>(HealthClient, DescribeTagsForOrganizationCommand, "nextToken", "nextToken", "maxResults");
