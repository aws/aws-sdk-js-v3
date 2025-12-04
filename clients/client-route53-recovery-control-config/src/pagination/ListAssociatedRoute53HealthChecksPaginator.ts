// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListAssociatedRoute53HealthChecksCommand,
  ListAssociatedRoute53HealthChecksCommandInput,
  ListAssociatedRoute53HealthChecksCommandOutput,
} from "../commands/ListAssociatedRoute53HealthChecksCommand";
import { Route53RecoveryControlConfigClient } from "../Route53RecoveryControlConfigClient";
import { Route53RecoveryControlConfigPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListAssociatedRoute53HealthChecks: (
  config: Route53RecoveryControlConfigPaginationConfiguration,
  input: ListAssociatedRoute53HealthChecksCommandInput,
  ...rest: any[]
) => Paginator<ListAssociatedRoute53HealthChecksCommandOutput> = createPaginator<
  Route53RecoveryControlConfigPaginationConfiguration,
  ListAssociatedRoute53HealthChecksCommandInput,
  ListAssociatedRoute53HealthChecksCommandOutput
>(Route53RecoveryControlConfigClient, ListAssociatedRoute53HealthChecksCommand, "NextToken", "NextToken", "MaxResults");
