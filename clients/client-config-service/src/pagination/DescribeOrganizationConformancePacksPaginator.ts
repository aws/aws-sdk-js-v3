// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  DescribeOrganizationConformancePacksCommand,
  DescribeOrganizationConformancePacksCommandInput,
  DescribeOrganizationConformancePacksCommandOutput,
} from "../commands/DescribeOrganizationConformancePacksCommand";
import { ConfigServiceClient } from "../ConfigServiceClient";
import { ConfigServicePaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateDescribeOrganizationConformancePacks: (
  config: ConfigServicePaginationConfiguration,
  input: DescribeOrganizationConformancePacksCommandInput,
  ...rest: any[]
) => Paginator<DescribeOrganizationConformancePacksCommandOutput> = createPaginator<
  ConfigServicePaginationConfiguration,
  DescribeOrganizationConformancePacksCommandInput,
  DescribeOrganizationConformancePacksCommandOutput
>(ConfigServiceClient, DescribeOrganizationConformancePacksCommand, "NextToken", "NextToken", "Limit");
