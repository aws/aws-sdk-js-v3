// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListCidrLocationsCommand,
  ListCidrLocationsCommandInput,
  ListCidrLocationsCommandOutput,
} from "../commands/ListCidrLocationsCommand";
import { Route53Client } from "../Route53Client";
import { Route53PaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListCidrLocations: (
  config: Route53PaginationConfiguration,
  input: ListCidrLocationsCommandInput,
  ...rest: any[]
) => Paginator<ListCidrLocationsCommandOutput> = createPaginator<
  Route53PaginationConfiguration,
  ListCidrLocationsCommandInput,
  ListCidrLocationsCommandOutput
>(Route53Client, ListCidrLocationsCommand, "NextToken", "NextToken", "MaxResults");
