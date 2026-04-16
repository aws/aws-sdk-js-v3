// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  DescribeServerlessV2PlatformVersionsCommand,
  DescribeServerlessV2PlatformVersionsCommandInput,
  DescribeServerlessV2PlatformVersionsCommandOutput,
} from "../commands/DescribeServerlessV2PlatformVersionsCommand";
import { RDSClient } from "../RDSClient";
import type { RDSPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateDescribeServerlessV2PlatformVersions: (
  config: RDSPaginationConfiguration,
  input: DescribeServerlessV2PlatformVersionsCommandInput,
  ...rest: any[]
) => Paginator<DescribeServerlessV2PlatformVersionsCommandOutput> = createPaginator<
  RDSPaginationConfiguration,
  DescribeServerlessV2PlatformVersionsCommandInput,
  DescribeServerlessV2PlatformVersionsCommandOutput
>(RDSClient, DescribeServerlessV2PlatformVersionsCommand, "Marker", "Marker", "MaxRecords");
