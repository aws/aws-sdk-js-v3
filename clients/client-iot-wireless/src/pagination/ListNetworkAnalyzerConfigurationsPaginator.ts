// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListNetworkAnalyzerConfigurationsCommand,
  ListNetworkAnalyzerConfigurationsCommandInput,
  ListNetworkAnalyzerConfigurationsCommandOutput,
} from "../commands/ListNetworkAnalyzerConfigurationsCommand";
import { IoTWirelessClient } from "../IoTWirelessClient";
import { IoTWirelessPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListNetworkAnalyzerConfigurations: (
  config: IoTWirelessPaginationConfiguration,
  input: ListNetworkAnalyzerConfigurationsCommandInput,
  ...rest: any[]
) => Paginator<ListNetworkAnalyzerConfigurationsCommandOutput> = createPaginator<
  IoTWirelessPaginationConfiguration,
  ListNetworkAnalyzerConfigurationsCommandInput,
  ListNetworkAnalyzerConfigurationsCommandOutput
>(IoTWirelessClient, ListNetworkAnalyzerConfigurationsCommand, "NextToken", "NextToken", "MaxResults");
