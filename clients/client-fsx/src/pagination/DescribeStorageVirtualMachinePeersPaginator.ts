// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  DescribeStorageVirtualMachinePeersCommand,
  DescribeStorageVirtualMachinePeersCommandInput,
  DescribeStorageVirtualMachinePeersCommandOutput,
} from "../commands/DescribeStorageVirtualMachinePeersCommand";
import { FSxClient } from "../FSxClient";
import type { FSxPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateDescribeStorageVirtualMachinePeers: (
  config: FSxPaginationConfiguration,
  input: DescribeStorageVirtualMachinePeersCommandInput,
  ...rest: any[]
) => Paginator<DescribeStorageVirtualMachinePeersCommandOutput> = createPaginator<
  FSxPaginationConfiguration,
  DescribeStorageVirtualMachinePeersCommandInput,
  DescribeStorageVirtualMachinePeersCommandOutput
>(FSxClient, DescribeStorageVirtualMachinePeersCommand, "NextToken", "NextToken", "MaxResults");
