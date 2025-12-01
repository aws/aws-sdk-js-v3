// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListWirelessGatewaysCommand,
  ListWirelessGatewaysCommandInput,
  ListWirelessGatewaysCommandOutput,
} from "../commands/ListWirelessGatewaysCommand";
import { IoTWirelessClient } from "../IoTWirelessClient";
import { IoTWirelessPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListWirelessGateways: (
  config: IoTWirelessPaginationConfiguration,
  input: ListWirelessGatewaysCommandInput,
  ...rest: any[]
) => Paginator<ListWirelessGatewaysCommandOutput> = createPaginator<
  IoTWirelessPaginationConfiguration,
  ListWirelessGatewaysCommandInput,
  ListWirelessGatewaysCommandOutput
>(IoTWirelessClient, ListWirelessGatewaysCommand, "NextToken", "NextToken", "MaxResults");
