// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListDestinationsCommand,
  ListDestinationsCommandInput,
  ListDestinationsCommandOutput,
} from "../commands/ListDestinationsCommand";
import { IoTWirelessClient } from "../IoTWirelessClient";
import { IoTWirelessPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListDestinations: (
  config: IoTWirelessPaginationConfiguration,
  input: ListDestinationsCommandInput,
  ...rest: any[]
) => Paginator<ListDestinationsCommandOutput> = createPaginator<
  IoTWirelessPaginationConfiguration,
  ListDestinationsCommandInput,
  ListDestinationsCommandOutput
>(IoTWirelessClient, ListDestinationsCommand, "NextToken", "NextToken", "MaxResults");
