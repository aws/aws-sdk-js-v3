// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListHealthChecksCommand,
  ListHealthChecksCommandInput,
  ListHealthChecksCommandOutput,
} from "../commands/ListHealthChecksCommand";
import { Route53Client } from "../Route53Client";
import { Route53PaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListHealthChecks: (
  config: Route53PaginationConfiguration,
  input: ListHealthChecksCommandInput,
  ...rest: any[]
) => Paginator<ListHealthChecksCommandOutput> = createPaginator<
  Route53PaginationConfiguration,
  ListHealthChecksCommandInput,
  ListHealthChecksCommandOutput
>(Route53Client, ListHealthChecksCommand, "Marker", "NextMarker", "MaxItems");
