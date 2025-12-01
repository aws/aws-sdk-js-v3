// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import { ApplicationDiscoveryServiceClient } from "../ApplicationDiscoveryServiceClient";
import {
  DescribeExportConfigurationsCommand,
  DescribeExportConfigurationsCommandInput,
  DescribeExportConfigurationsCommandOutput,
} from "../commands/DescribeExportConfigurationsCommand";
import { ApplicationDiscoveryServicePaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateDescribeExportConfigurations: (
  config: ApplicationDiscoveryServicePaginationConfiguration,
  input: DescribeExportConfigurationsCommandInput,
  ...rest: any[]
) => Paginator<DescribeExportConfigurationsCommandOutput> = createPaginator<
  ApplicationDiscoveryServicePaginationConfiguration,
  DescribeExportConfigurationsCommandInput,
  DescribeExportConfigurationsCommandOutput
>(ApplicationDiscoveryServiceClient, DescribeExportConfigurationsCommand, "nextToken", "nextToken", "maxResults");
