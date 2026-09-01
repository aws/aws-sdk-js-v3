// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListCustomDetectionRulesCommand,
  ListCustomDetectionRulesCommandInput,
  ListCustomDetectionRulesCommandOutput,
} from "../commands/ListCustomDetectionRulesCommand";
import { GuardDutyClient } from "../GuardDutyClient";
import type { GuardDutyPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListCustomDetectionRules: (
  config: GuardDutyPaginationConfiguration,
  input: ListCustomDetectionRulesCommandInput,
  ...rest: any[]
) => Paginator<ListCustomDetectionRulesCommandOutput> = createPaginator<
  GuardDutyPaginationConfiguration,
  ListCustomDetectionRulesCommandInput,
  ListCustomDetectionRulesCommandOutput
>(GuardDutyClient, ListCustomDetectionRulesCommand, "NextToken", "NextToken", "MaxResults");
