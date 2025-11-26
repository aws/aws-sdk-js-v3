// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListReadinessChecksCommand,
  ListReadinessChecksCommandInput,
  ListReadinessChecksCommandOutput,
} from "../commands/ListReadinessChecksCommand";
import { Route53RecoveryReadinessClient } from "../Route53RecoveryReadinessClient";
import { Route53RecoveryReadinessPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListReadinessChecks: (
  config: Route53RecoveryReadinessPaginationConfiguration,
  input: ListReadinessChecksCommandInput,
  ...rest: any[]
) => Paginator<ListReadinessChecksCommandOutput> = createPaginator<
  Route53RecoveryReadinessPaginationConfiguration,
  ListReadinessChecksCommandInput,
  ListReadinessChecksCommandOutput
>(Route53RecoveryReadinessClient, ListReadinessChecksCommand, "NextToken", "NextToken", "MaxResults");
