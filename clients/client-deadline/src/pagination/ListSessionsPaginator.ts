// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListSessionsCommand,
  ListSessionsCommandInput,
  ListSessionsCommandOutput,
} from "../commands/ListSessionsCommand";
import { DeadlineClient } from "../DeadlineClient";
import type { DeadlinePaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListSessions: (
  config: DeadlinePaginationConfiguration,
  input: ListSessionsCommandInput,
  ...rest: any[]
) => Paginator<ListSessionsCommandOutput> = createPaginator<
  DeadlinePaginationConfiguration,
  ListSessionsCommandInput,
  ListSessionsCommandOutput
>(DeadlineClient, ListSessionsCommand, "nextToken", "nextToken", "maxResults");
