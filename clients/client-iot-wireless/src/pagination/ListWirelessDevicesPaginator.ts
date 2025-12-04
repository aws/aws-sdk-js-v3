// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListWirelessDevicesCommand,
  ListWirelessDevicesCommandInput,
  ListWirelessDevicesCommandOutput,
} from "../commands/ListWirelessDevicesCommand";
import { IoTWirelessClient } from "../IoTWirelessClient";
import { IoTWirelessPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListWirelessDevices: (
  config: IoTWirelessPaginationConfiguration,
  input: ListWirelessDevicesCommandInput,
  ...rest: any[]
) => Paginator<ListWirelessDevicesCommandOutput> = createPaginator<
  IoTWirelessPaginationConfiguration,
  ListWirelessDevicesCommandInput,
  ListWirelessDevicesCommandOutput
>(IoTWirelessClient, ListWirelessDevicesCommand, "NextToken", "NextToken", "MaxResults");
