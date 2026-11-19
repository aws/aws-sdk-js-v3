// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListHealthChecksBySourceCommand,
  ListHealthChecksBySourceCommandInput,
  ListHealthChecksBySourceCommandOutput,
} from "../commands/ListHealthChecksBySourceCommand";
import { Route53Client } from "../Route53Client";
import type { Route53PaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListHealthChecksBySource: (
  config: Route53PaginationConfiguration,
  input: ListHealthChecksBySourceCommandInput,
  ...rest: any[]
) => Paginator<ListHealthChecksBySourceCommandOutput> = createPaginator<
  Route53PaginationConfiguration,
  ListHealthChecksBySourceCommandInput,
  ListHealthChecksBySourceCommandOutput
>(Route53Client, ListHealthChecksBySourceCommand, "Marker", "NextMarker", "MaxItems");
