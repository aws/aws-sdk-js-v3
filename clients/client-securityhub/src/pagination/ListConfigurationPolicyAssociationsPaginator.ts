// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListConfigurationPolicyAssociationsCommand,
  ListConfigurationPolicyAssociationsCommandInput,
  ListConfigurationPolicyAssociationsCommandOutput,
} from "../commands/ListConfigurationPolicyAssociationsCommand";
import { SecurityHubClient } from "../SecurityHubClient";
import { SecurityHubPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListConfigurationPolicyAssociations: (
  config: SecurityHubPaginationConfiguration,
  input: ListConfigurationPolicyAssociationsCommandInput,
  ...rest: any[]
) => Paginator<ListConfigurationPolicyAssociationsCommandOutput> = createPaginator<
  SecurityHubPaginationConfiguration,
  ListConfigurationPolicyAssociationsCommandInput,
  ListConfigurationPolicyAssociationsCommandOutput
>(SecurityHubClient, ListConfigurationPolicyAssociationsCommand, "NextToken", "NextToken", "MaxResults");
