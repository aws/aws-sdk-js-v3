// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListHealthCheckSourcesCommand,
  ListHealthCheckSourcesCommandInput,
  ListHealthCheckSourcesCommandOutput,
} from "../commands/ListHealthCheckSourcesCommand";
import { Route53Client } from "../Route53Client";
import type { Route53PaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListHealthCheckSources: (
  config: Route53PaginationConfiguration,
  input: ListHealthCheckSourcesCommandInput,
  ...rest: any[]
) => Paginator<ListHealthCheckSourcesCommandOutput> = createPaginator<
  Route53PaginationConfiguration,
  ListHealthCheckSourcesCommandInput,
  ListHealthCheckSourcesCommandOutput
>(Route53Client, ListHealthCheckSourcesCommand, "NextToken", "NextToken", "MaxResults");
