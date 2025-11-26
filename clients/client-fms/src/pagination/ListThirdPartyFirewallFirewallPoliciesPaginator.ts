// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListThirdPartyFirewallFirewallPoliciesCommand,
  ListThirdPartyFirewallFirewallPoliciesCommandInput,
  ListThirdPartyFirewallFirewallPoliciesCommandOutput,
} from "../commands/ListThirdPartyFirewallFirewallPoliciesCommand";
import { FMSClient } from "../FMSClient";
import { FMSPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListThirdPartyFirewallFirewallPolicies: (
  config: FMSPaginationConfiguration,
  input: ListThirdPartyFirewallFirewallPoliciesCommandInput,
  ...rest: any[]
) => Paginator<ListThirdPartyFirewallFirewallPoliciesCommandOutput> = createPaginator<
  FMSPaginationConfiguration,
  ListThirdPartyFirewallFirewallPoliciesCommandInput,
  ListThirdPartyFirewallFirewallPoliciesCommandOutput
>(FMSClient, ListThirdPartyFirewallFirewallPoliciesCommand, "NextToken", "NextToken", "MaxResults");
