// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import { GetCrawlersCommand, GetCrawlersCommandInput, GetCrawlersCommandOutput } from "../commands/GetCrawlersCommand";
import { GlueClient } from "../GlueClient";
import { GluePaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateGetCrawlers: (
  config: GluePaginationConfiguration,
  input: GetCrawlersCommandInput,
  ...rest: any[]
) => Paginator<GetCrawlersCommandOutput> = createPaginator<
  GluePaginationConfiguration,
  GetCrawlersCommandInput,
  GetCrawlersCommandOutput
>(GlueClient, GetCrawlersCommand, "NextToken", "NextToken", "MaxResults");
