// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  GetReadinessCheckStatusCommand,
  GetReadinessCheckStatusCommandInput,
  GetReadinessCheckStatusCommandOutput,
} from "../commands/GetReadinessCheckStatusCommand";
import { Route53RecoveryReadinessClient } from "../Route53RecoveryReadinessClient";
import { Route53RecoveryReadinessPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateGetReadinessCheckStatus: (
  config: Route53RecoveryReadinessPaginationConfiguration,
  input: GetReadinessCheckStatusCommandInput,
  ...rest: any[]
) => Paginator<GetReadinessCheckStatusCommandOutput> = createPaginator<
  Route53RecoveryReadinessPaginationConfiguration,
  GetReadinessCheckStatusCommandInput,
  GetReadinessCheckStatusCommandOutput
>(Route53RecoveryReadinessClient, GetReadinessCheckStatusCommand, "NextToken", "NextToken", "MaxResults");
