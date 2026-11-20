// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListHostedZoneChangeBatchesCommand,
  ListHostedZoneChangeBatchesCommandInput,
  ListHostedZoneChangeBatchesCommandOutput,
} from "../commands/ListHostedZoneChangeBatchesCommand";
import { Route53Client } from "../Route53Client";
import type { Route53PaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListHostedZoneChangeBatches: (
  config: Route53PaginationConfiguration,
  input: ListHostedZoneChangeBatchesCommandInput,
  ...rest: any[]
) => Paginator<ListHostedZoneChangeBatchesCommandOutput> = createPaginator<
  Route53PaginationConfiguration,
  ListHostedZoneChangeBatchesCommandInput,
  ListHostedZoneChangeBatchesCommandOutput
>(Route53Client, ListHostedZoneChangeBatchesCommand, "NextToken", "NextToken", "MaxResults");
