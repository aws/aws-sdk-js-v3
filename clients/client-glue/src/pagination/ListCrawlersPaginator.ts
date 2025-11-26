// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListCrawlersCommand,
  ListCrawlersCommandInput,
  ListCrawlersCommandOutput,
} from "../commands/ListCrawlersCommand";
import { GlueClient } from "../GlueClient";
import { GluePaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListCrawlers: (
  config: GluePaginationConfiguration,
  input: ListCrawlersCommandInput,
  ...rest: any[]
) => Paginator<ListCrawlersCommandOutput> = createPaginator<
  GluePaginationConfiguration,
  ListCrawlersCommandInput,
  ListCrawlersCommandOutput
>(GlueClient, ListCrawlersCommand, "NextToken", "NextToken", "MaxResults");
