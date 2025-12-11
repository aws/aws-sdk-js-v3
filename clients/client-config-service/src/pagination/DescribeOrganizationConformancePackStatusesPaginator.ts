// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  DescribeOrganizationConformancePackStatusesCommand,
  DescribeOrganizationConformancePackStatusesCommandInput,
  DescribeOrganizationConformancePackStatusesCommandOutput,
} from "../commands/DescribeOrganizationConformancePackStatusesCommand";
import { ConfigServiceClient } from "../ConfigServiceClient";
import { ConfigServicePaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateDescribeOrganizationConformancePackStatuses: (
  config: ConfigServicePaginationConfiguration,
  input: DescribeOrganizationConformancePackStatusesCommandInput,
  ...rest: any[]
) => Paginator<DescribeOrganizationConformancePackStatusesCommandOutput> = createPaginator<
  ConfigServicePaginationConfiguration,
  DescribeOrganizationConformancePackStatusesCommandInput,
  DescribeOrganizationConformancePackStatusesCommandOutput
>(ConfigServiceClient, DescribeOrganizationConformancePackStatusesCommand, "NextToken", "NextToken", "Limit");
