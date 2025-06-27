// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import { Paginator } from "@smithy/types";

import {
  ListRuleBasedMatchesCommand,
  ListRuleBasedMatchesCommandInput,
  ListRuleBasedMatchesCommandOutput,
} from "../commands/ListRuleBasedMatchesCommand";
import { CustomerProfilesClient } from "../CustomerProfilesClient";
import { CustomerProfilesPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListRuleBasedMatches: (
  config: CustomerProfilesPaginationConfiguration,
  input: ListRuleBasedMatchesCommandInput,
  ...rest: any[]
) => Paginator<ListRuleBasedMatchesCommandOutput> = createPaginator<
  CustomerProfilesPaginationConfiguration,
  ListRuleBasedMatchesCommandInput,
  ListRuleBasedMatchesCommandOutput
>(CustomerProfilesClient, ListRuleBasedMatchesCommand, "NextToken", "NextToken", "MaxResults");
