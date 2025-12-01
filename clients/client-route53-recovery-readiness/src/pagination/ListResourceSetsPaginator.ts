// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListResourceSetsCommand,
  ListResourceSetsCommandInput,
  ListResourceSetsCommandOutput,
} from "../commands/ListResourceSetsCommand";
import { Route53RecoveryReadinessClient } from "../Route53RecoveryReadinessClient";
import { Route53RecoveryReadinessPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListResourceSets: (
  config: Route53RecoveryReadinessPaginationConfiguration,
  input: ListResourceSetsCommandInput,
  ...rest: any[]
) => Paginator<ListResourceSetsCommandOutput> = createPaginator<
  Route53RecoveryReadinessPaginationConfiguration,
  ListResourceSetsCommandInput,
  ListResourceSetsCommandOutput
>(Route53RecoveryReadinessClient, ListResourceSetsCommand, "NextToken", "NextToken", "MaxResults");
