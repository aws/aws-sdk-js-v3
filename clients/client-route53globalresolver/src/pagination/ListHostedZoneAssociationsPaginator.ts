// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import { Paginator } from "@smithy/types";

import {
  ListHostedZoneAssociationsCommand,
  ListHostedZoneAssociationsCommandInput,
  ListHostedZoneAssociationsCommandOutput,
} from "../commands/ListHostedZoneAssociationsCommand";
import { Route53GlobalResolverClient } from "../Route53GlobalResolverClient";
import { Route53GlobalResolverPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListHostedZoneAssociations: (
  config: Route53GlobalResolverPaginationConfiguration,
  input: ListHostedZoneAssociationsCommandInput,
  ...rest: any[]
) => Paginator<ListHostedZoneAssociationsCommandOutput> = createPaginator<
  Route53GlobalResolverPaginationConfiguration,
  ListHostedZoneAssociationsCommandInput,
  ListHostedZoneAssociationsCommandOutput
>(Route53GlobalResolverClient, ListHostedZoneAssociationsCommand, "nextToken", "nextToken", "maxResults");
