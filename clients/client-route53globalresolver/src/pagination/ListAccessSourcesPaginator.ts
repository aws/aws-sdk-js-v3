// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListAccessSourcesCommand,
  ListAccessSourcesCommandInput,
  ListAccessSourcesCommandOutput,
} from "../commands/ListAccessSourcesCommand";
import { Route53GlobalResolverClient } from "../Route53GlobalResolverClient";
import { Route53GlobalResolverPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListAccessSources: (
  config: Route53GlobalResolverPaginationConfiguration,
  input: ListAccessSourcesCommandInput,
  ...rest: any[]
) => Paginator<ListAccessSourcesCommandOutput> = createPaginator<
  Route53GlobalResolverPaginationConfiguration,
  ListAccessSourcesCommandInput,
  ListAccessSourcesCommandOutput
>(Route53GlobalResolverClient, ListAccessSourcesCommand, "nextToken", "nextToken", "maxResults");
