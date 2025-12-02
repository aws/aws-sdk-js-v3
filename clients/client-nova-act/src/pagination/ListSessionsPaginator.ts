// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import { Paginator } from "@smithy/types";

import {
  ListSessionsCommand,
  ListSessionsCommandInput,
  ListSessionsCommandOutput,
} from "../commands/ListSessionsCommand";
import { NovaActClient } from "../NovaActClient";
import { NovaActPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListSessions: (
  config: NovaActPaginationConfiguration,
  input: ListSessionsCommandInput,
  ...rest: any[]
) => Paginator<ListSessionsCommandOutput> = createPaginator<
  NovaActPaginationConfiguration,
  ListSessionsCommandInput,
  ListSessionsCommandOutput
>(NovaActClient, ListSessionsCommand, "nextToken", "nextToken", "maxResults");
