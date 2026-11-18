// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  DescribeServerlessV2PlatformVersionsCommand,
  DescribeServerlessV2PlatformVersionsCommandInput,
  DescribeServerlessV2PlatformVersionsCommandOutput,
} from "../commands/DescribeServerlessV2PlatformVersionsCommand";
import { NeptuneClient } from "../NeptuneClient";
import type { NeptunePaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateDescribeServerlessV2PlatformVersions: (
  config: NeptunePaginationConfiguration,
  input: DescribeServerlessV2PlatformVersionsCommandInput,
  ...rest: any[]
) => Paginator<DescribeServerlessV2PlatformVersionsCommandOutput> = createPaginator<
  NeptunePaginationConfiguration,
  DescribeServerlessV2PlatformVersionsCommandInput,
  DescribeServerlessV2PlatformVersionsCommandOutput
>(NeptuneClient, DescribeServerlessV2PlatformVersionsCommand, "Marker", "Marker", "MaxRecords");
