// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  DescribeReplicationConfigurationTemplatesCommand,
  DescribeReplicationConfigurationTemplatesCommandInput,
  DescribeReplicationConfigurationTemplatesCommandOutput,
} from "../commands/DescribeReplicationConfigurationTemplatesCommand";
import { MgnClient } from "../MgnClient";
import { MgnPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateDescribeReplicationConfigurationTemplates: (
  config: MgnPaginationConfiguration,
  input: DescribeReplicationConfigurationTemplatesCommandInput,
  ...rest: any[]
) => Paginator<DescribeReplicationConfigurationTemplatesCommandOutput> = createPaginator<
  MgnPaginationConfiguration,
  DescribeReplicationConfigurationTemplatesCommandInput,
  DescribeReplicationConfigurationTemplatesCommandOutput
>(MgnClient, DescribeReplicationConfigurationTemplatesCommand, "nextToken", "nextToken", "maxResults");
