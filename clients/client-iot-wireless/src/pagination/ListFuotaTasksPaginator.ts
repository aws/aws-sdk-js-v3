// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListFuotaTasksCommand,
  ListFuotaTasksCommandInput,
  ListFuotaTasksCommandOutput,
} from "../commands/ListFuotaTasksCommand";
import { IoTWirelessClient } from "../IoTWirelessClient";
import { IoTWirelessPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListFuotaTasks: (
  config: IoTWirelessPaginationConfiguration,
  input: ListFuotaTasksCommandInput,
  ...rest: any[]
) => Paginator<ListFuotaTasksCommandOutput> = createPaginator<
  IoTWirelessPaginationConfiguration,
  ListFuotaTasksCommandInput,
  ListFuotaTasksCommandOutput
>(IoTWirelessClient, ListFuotaTasksCommand, "NextToken", "NextToken", "MaxResults");
