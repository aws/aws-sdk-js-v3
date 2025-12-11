// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  DescribeFileSystemsCommand,
  DescribeFileSystemsCommandInput,
  DescribeFileSystemsCommandOutput,
} from "../commands/DescribeFileSystemsCommand";
import { EFSClient } from "../EFSClient";
import { EFSPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateDescribeFileSystems: (
  config: EFSPaginationConfiguration,
  input: DescribeFileSystemsCommandInput,
  ...rest: any[]
) => Paginator<DescribeFileSystemsCommandOutput> = createPaginator<
  EFSPaginationConfiguration,
  DescribeFileSystemsCommandInput,
  DescribeFileSystemsCommandOutput
>(EFSClient, DescribeFileSystemsCommand, "Marker", "NextMarker", "MaxItems");
