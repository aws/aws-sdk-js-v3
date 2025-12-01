// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListMulticastGroupsCommand,
  ListMulticastGroupsCommandInput,
  ListMulticastGroupsCommandOutput,
} from "../commands/ListMulticastGroupsCommand";
import { IoTWirelessClient } from "../IoTWirelessClient";
import { IoTWirelessPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListMulticastGroups: (
  config: IoTWirelessPaginationConfiguration,
  input: ListMulticastGroupsCommandInput,
  ...rest: any[]
) => Paginator<ListMulticastGroupsCommandOutput> = createPaginator<
  IoTWirelessPaginationConfiguration,
  ListMulticastGroupsCommandInput,
  ListMulticastGroupsCommandOutput
>(IoTWirelessClient, ListMulticastGroupsCommand, "NextToken", "NextToken", "MaxResults");
