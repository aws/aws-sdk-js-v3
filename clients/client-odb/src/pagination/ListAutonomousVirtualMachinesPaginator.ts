// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListAutonomousVirtualMachinesCommand,
  ListAutonomousVirtualMachinesCommandInput,
  ListAutonomousVirtualMachinesCommandOutput,
} from "../commands/ListAutonomousVirtualMachinesCommand";
import { OdbClient } from "../OdbClient";
import { OdbPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListAutonomousVirtualMachines: (
  config: OdbPaginationConfiguration,
  input: ListAutonomousVirtualMachinesCommandInput,
  ...rest: any[]
) => Paginator<ListAutonomousVirtualMachinesCommandOutput> = createPaginator<
  OdbPaginationConfiguration,
  ListAutonomousVirtualMachinesCommandInput,
  ListAutonomousVirtualMachinesCommandOutput
>(OdbClient, ListAutonomousVirtualMachinesCommand, "nextToken", "nextToken", "maxResults");
