// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  DescribeReplicationConfigurationTemplatesCommand,
  DescribeReplicationConfigurationTemplatesCommandInput,
  DescribeReplicationConfigurationTemplatesCommandOutput,
} from "../commands/DescribeReplicationConfigurationTemplatesCommand";
import { DrsClient } from "../DrsClient";
import { DrsPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateDescribeReplicationConfigurationTemplates: (
  config: DrsPaginationConfiguration,
  input: DescribeReplicationConfigurationTemplatesCommandInput,
  ...rest: any[]
) => Paginator<DescribeReplicationConfigurationTemplatesCommandOutput> = createPaginator<
  DrsPaginationConfiguration,
  DescribeReplicationConfigurationTemplatesCommandInput,
  DescribeReplicationConfigurationTemplatesCommandOutput
>(DrsClient, DescribeReplicationConfigurationTemplatesCommand, "nextToken", "nextToken", "maxResults");
