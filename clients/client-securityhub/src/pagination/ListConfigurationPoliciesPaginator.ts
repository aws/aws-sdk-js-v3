// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListConfigurationPoliciesCommand,
  ListConfigurationPoliciesCommandInput,
  ListConfigurationPoliciesCommandOutput,
} from "../commands/ListConfigurationPoliciesCommand";
import { SecurityHubClient } from "../SecurityHubClient";
import { SecurityHubPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListConfigurationPolicies: (
  config: SecurityHubPaginationConfiguration,
  input: ListConfigurationPoliciesCommandInput,
  ...rest: any[]
) => Paginator<ListConfigurationPoliciesCommandOutput> = createPaginator<
  SecurityHubPaginationConfiguration,
  ListConfigurationPoliciesCommandInput,
  ListConfigurationPoliciesCommandOutput
>(SecurityHubClient, ListConfigurationPoliciesCommand, "NextToken", "NextToken", "MaxResults");
