// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  DescribeStorageVirtualMachinesCommand,
  DescribeStorageVirtualMachinesCommandInput,
  DescribeStorageVirtualMachinesCommandOutput,
} from "../commands/DescribeStorageVirtualMachinesCommand";
import { FSxClient } from "../FSxClient";
import { FSxPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateDescribeStorageVirtualMachines: (
  config: FSxPaginationConfiguration,
  input: DescribeStorageVirtualMachinesCommandInput,
  ...rest: any[]
) => Paginator<DescribeStorageVirtualMachinesCommandOutput> = createPaginator<
  FSxPaginationConfiguration,
  DescribeStorageVirtualMachinesCommandInput,
  DescribeStorageVirtualMachinesCommandOutput
>(FSxClient, DescribeStorageVirtualMachinesCommand, "NextToken", "NextToken", "MaxResults");
