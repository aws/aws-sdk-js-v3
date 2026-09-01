// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListCustomDetectionRuleOrgConfigurationsCommand,
  ListCustomDetectionRuleOrgConfigurationsCommandInput,
  ListCustomDetectionRuleOrgConfigurationsCommandOutput,
} from "../commands/ListCustomDetectionRuleOrgConfigurationsCommand";
import { GuardDutyClient } from "../GuardDutyClient";
import type { GuardDutyPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListCustomDetectionRuleOrgConfigurations: (
  config: GuardDutyPaginationConfiguration,
  input: ListCustomDetectionRuleOrgConfigurationsCommandInput,
  ...rest: any[]
) => Paginator<ListCustomDetectionRuleOrgConfigurationsCommandOutput> = createPaginator<
  GuardDutyPaginationConfiguration,
  ListCustomDetectionRuleOrgConfigurationsCommandInput,
  ListCustomDetectionRuleOrgConfigurationsCommandOutput
>(GuardDutyClient, ListCustomDetectionRuleOrgConfigurationsCommand, "NextToken", "NextToken", "MaxResults");
