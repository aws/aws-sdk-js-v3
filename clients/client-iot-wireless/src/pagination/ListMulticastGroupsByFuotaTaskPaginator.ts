// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListMulticastGroupsByFuotaTaskCommand,
  ListMulticastGroupsByFuotaTaskCommandInput,
  ListMulticastGroupsByFuotaTaskCommandOutput,
} from "../commands/ListMulticastGroupsByFuotaTaskCommand";
import { IoTWirelessClient } from "../IoTWirelessClient";
import { IoTWirelessPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListMulticastGroupsByFuotaTask: (
  config: IoTWirelessPaginationConfiguration,
  input: ListMulticastGroupsByFuotaTaskCommandInput,
  ...rest: any[]
) => Paginator<ListMulticastGroupsByFuotaTaskCommandOutput> = createPaginator<
  IoTWirelessPaginationConfiguration,
  ListMulticastGroupsByFuotaTaskCommandInput,
  ListMulticastGroupsByFuotaTaskCommandOutput
>(IoTWirelessClient, ListMulticastGroupsByFuotaTaskCommand, "NextToken", "NextToken", "MaxResults");
