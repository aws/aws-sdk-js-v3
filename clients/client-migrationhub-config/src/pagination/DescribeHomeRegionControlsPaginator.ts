// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  DescribeHomeRegionControlsCommand,
  DescribeHomeRegionControlsCommandInput,
  DescribeHomeRegionControlsCommandOutput,
} from "../commands/DescribeHomeRegionControlsCommand";
import { MigrationHubConfigClient } from "../MigrationHubConfigClient";
import { MigrationHubConfigPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateDescribeHomeRegionControls: (
  config: MigrationHubConfigPaginationConfiguration,
  input: DescribeHomeRegionControlsCommandInput,
  ...rest: any[]
) => Paginator<DescribeHomeRegionControlsCommandOutput> = createPaginator<
  MigrationHubConfigPaginationConfiguration,
  DescribeHomeRegionControlsCommandInput,
  DescribeHomeRegionControlsCommandOutput
>(MigrationHubConfigClient, DescribeHomeRegionControlsCommand, "NextToken", "NextToken", "MaxResults");
