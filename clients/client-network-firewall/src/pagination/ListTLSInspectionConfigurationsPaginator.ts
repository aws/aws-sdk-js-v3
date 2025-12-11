// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListTLSInspectionConfigurationsCommand,
  ListTLSInspectionConfigurationsCommandInput,
  ListTLSInspectionConfigurationsCommandOutput,
} from "../commands/ListTLSInspectionConfigurationsCommand";
import { NetworkFirewallClient } from "../NetworkFirewallClient";
import { NetworkFirewallPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListTLSInspectionConfigurations: (
  config: NetworkFirewallPaginationConfiguration,
  input: ListTLSInspectionConfigurationsCommandInput,
  ...rest: any[]
) => Paginator<ListTLSInspectionConfigurationsCommandOutput> = createPaginator<
  NetworkFirewallPaginationConfiguration,
  ListTLSInspectionConfigurationsCommandInput,
  ListTLSInspectionConfigurationsCommandOutput
>(NetworkFirewallClient, ListTLSInspectionConfigurationsCommand, "NextToken", "NextToken", "MaxResults");
