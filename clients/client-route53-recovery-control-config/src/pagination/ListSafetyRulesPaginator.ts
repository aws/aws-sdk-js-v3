// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListSafetyRulesCommand,
  ListSafetyRulesCommandInput,
  ListSafetyRulesCommandOutput,
} from "../commands/ListSafetyRulesCommand";
import { Route53RecoveryControlConfigClient } from "../Route53RecoveryControlConfigClient";
import { Route53RecoveryControlConfigPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListSafetyRules: (
  config: Route53RecoveryControlConfigPaginationConfiguration,
  input: ListSafetyRulesCommandInput,
  ...rest: any[]
) => Paginator<ListSafetyRulesCommandOutput> = createPaginator<
  Route53RecoveryControlConfigPaginationConfiguration,
  ListSafetyRulesCommandInput,
  ListSafetyRulesCommandOutput
>(Route53RecoveryControlConfigClient, ListSafetyRulesCommand, "NextToken", "NextToken", "MaxResults");
