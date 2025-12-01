// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListRecoveryGroupsCommand,
  ListRecoveryGroupsCommandInput,
  ListRecoveryGroupsCommandOutput,
} from "../commands/ListRecoveryGroupsCommand";
import { Route53RecoveryReadinessClient } from "../Route53RecoveryReadinessClient";
import { Route53RecoveryReadinessPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListRecoveryGroups: (
  config: Route53RecoveryReadinessPaginationConfiguration,
  input: ListRecoveryGroupsCommandInput,
  ...rest: any[]
) => Paginator<ListRecoveryGroupsCommandOutput> = createPaginator<
  Route53RecoveryReadinessPaginationConfiguration,
  ListRecoveryGroupsCommandInput,
  ListRecoveryGroupsCommandOutput
>(Route53RecoveryReadinessClient, ListRecoveryGroupsCommand, "NextToken", "NextToken", "MaxResults");
