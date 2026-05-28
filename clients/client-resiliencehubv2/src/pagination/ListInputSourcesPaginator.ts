// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListInputSourcesCommand,
  ListInputSourcesCommandInput,
  ListInputSourcesCommandOutput,
} from "../commands/ListInputSourcesCommand";
import { Resiliencehubv2Client } from "../Resiliencehubv2Client";
import type { Resiliencehubv2PaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListInputSources: (
  config: Resiliencehubv2PaginationConfiguration,
  input: ListInputSourcesCommandInput,
  ...rest: any[]
) => Paginator<ListInputSourcesCommandOutput> = createPaginator<
  Resiliencehubv2PaginationConfiguration,
  ListInputSourcesCommandInput,
  ListInputSourcesCommandOutput
>(Resiliencehubv2Client, ListInputSourcesCommand, "nextToken", "nextToken", "maxResults");
