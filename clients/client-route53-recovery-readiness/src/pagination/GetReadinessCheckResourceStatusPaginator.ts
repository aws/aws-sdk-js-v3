// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  GetReadinessCheckResourceStatusCommand,
  GetReadinessCheckResourceStatusCommandInput,
  GetReadinessCheckResourceStatusCommandOutput,
} from "../commands/GetReadinessCheckResourceStatusCommand";
import { Route53RecoveryReadinessClient } from "../Route53RecoveryReadinessClient";
import { Route53RecoveryReadinessPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateGetReadinessCheckResourceStatus: (
  config: Route53RecoveryReadinessPaginationConfiguration,
  input: GetReadinessCheckResourceStatusCommandInput,
  ...rest: any[]
) => Paginator<GetReadinessCheckResourceStatusCommandOutput> = createPaginator<
  Route53RecoveryReadinessPaginationConfiguration,
  GetReadinessCheckResourceStatusCommandInput,
  GetReadinessCheckResourceStatusCommandOutput
>(Route53RecoveryReadinessClient, GetReadinessCheckResourceStatusCommand, "NextToken", "NextToken", "MaxResults");
