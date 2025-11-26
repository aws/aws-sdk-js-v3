// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListPositionConfigurationsCommand,
  ListPositionConfigurationsCommandInput,
  ListPositionConfigurationsCommandOutput,
} from "../commands/ListPositionConfigurationsCommand";
import { IoTWirelessClient } from "../IoTWirelessClient";
import { IoTWirelessPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListPositionConfigurations: (
  config: IoTWirelessPaginationConfiguration,
  input: ListPositionConfigurationsCommandInput,
  ...rest: any[]
) => Paginator<ListPositionConfigurationsCommandOutput> = createPaginator<
  IoTWirelessPaginationConfiguration,
  ListPositionConfigurationsCommandInput,
  ListPositionConfigurationsCommandOutput
>(IoTWirelessClient, ListPositionConfigurationsCommand, "NextToken", "NextToken", "MaxResults");
