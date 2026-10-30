// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  DescribeServerlessV2PlatformVersionsCommand,
  DescribeServerlessV2PlatformVersionsCommandInput,
  DescribeServerlessV2PlatformVersionsCommandOutput,
} from "../commands/DescribeServerlessV2PlatformVersionsCommand";
import { DocDBClient } from "../DocDBClient";
import type { DocDBPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateDescribeServerlessV2PlatformVersions: (
  config: DocDBPaginationConfiguration,
  input: DescribeServerlessV2PlatformVersionsCommandInput,
  ...rest: any[]
) => Paginator<DescribeServerlessV2PlatformVersionsCommandOutput> = createPaginator<
  DocDBPaginationConfiguration,
  DescribeServerlessV2PlatformVersionsCommandInput,
  DescribeServerlessV2PlatformVersionsCommandOutput
>(DocDBClient, DescribeServerlessV2PlatformVersionsCommand, "Marker", "Marker", "MaxRecords");
