// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListHostedZonesCommand,
  ListHostedZonesCommandInput,
  ListHostedZonesCommandOutput,
} from "../commands/ListHostedZonesCommand";
import { Route53Client } from "../Route53Client";
import { Route53PaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListHostedZones: (
  config: Route53PaginationConfiguration,
  input: ListHostedZonesCommandInput,
  ...rest: any[]
) => Paginator<ListHostedZonesCommandOutput> = createPaginator<
  Route53PaginationConfiguration,
  ListHostedZonesCommandInput,
  ListHostedZonesCommandOutput
>(Route53Client, ListHostedZonesCommand, "Marker", "NextMarker", "MaxItems");
