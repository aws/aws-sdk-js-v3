// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import { ListRulesCommand, ListRulesCommandInput, ListRulesCommandOutput } from "../commands/ListRulesCommand";
import { Route53RecoveryReadinessClient } from "../Route53RecoveryReadinessClient";
import { Route53RecoveryReadinessPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListRules: (
  config: Route53RecoveryReadinessPaginationConfiguration,
  input: ListRulesCommandInput,
  ...rest: any[]
) => Paginator<ListRulesCommandOutput> = createPaginator<
  Route53RecoveryReadinessPaginationConfiguration,
  ListRulesCommandInput,
  ListRulesCommandOutput
>(Route53RecoveryReadinessClient, ListRulesCommand, "NextToken", "NextToken", "MaxResults");
