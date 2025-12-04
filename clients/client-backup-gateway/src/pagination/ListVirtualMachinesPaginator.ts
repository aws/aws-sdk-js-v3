// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import { BackupGatewayClient } from "../BackupGatewayClient";
import {
  ListVirtualMachinesCommand,
  ListVirtualMachinesCommandInput,
  ListVirtualMachinesCommandOutput,
} from "../commands/ListVirtualMachinesCommand";
import { BackupGatewayPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListVirtualMachines: (
  config: BackupGatewayPaginationConfiguration,
  input: ListVirtualMachinesCommandInput,
  ...rest: any[]
) => Paginator<ListVirtualMachinesCommandOutput> = createPaginator<
  BackupGatewayPaginationConfiguration,
  ListVirtualMachinesCommandInput,
  ListVirtualMachinesCommandOutput
>(BackupGatewayClient, ListVirtualMachinesCommand, "NextToken", "NextToken", "MaxResults");
