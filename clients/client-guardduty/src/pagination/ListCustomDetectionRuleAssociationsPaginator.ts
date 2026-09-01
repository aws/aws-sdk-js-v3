// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListCustomDetectionRuleAssociationsCommand,
  ListCustomDetectionRuleAssociationsCommandInput,
  ListCustomDetectionRuleAssociationsCommandOutput,
} from "../commands/ListCustomDetectionRuleAssociationsCommand";
import { GuardDutyClient } from "../GuardDutyClient";
import type { GuardDutyPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListCustomDetectionRuleAssociations: (
  config: GuardDutyPaginationConfiguration,
  input: ListCustomDetectionRuleAssociationsCommandInput,
  ...rest: any[]
) => Paginator<ListCustomDetectionRuleAssociationsCommandOutput> = createPaginator<
  GuardDutyPaginationConfiguration,
  ListCustomDetectionRuleAssociationsCommandInput,
  ListCustomDetectionRuleAssociationsCommandOutput
>(GuardDutyClient, ListCustomDetectionRuleAssociationsCommand, "NextToken", "NextToken", "MaxResults");
