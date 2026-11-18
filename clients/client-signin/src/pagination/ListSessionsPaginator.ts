// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListSessionsCommand,
  ListSessionsCommandInput,
  ListSessionsCommandOutput,
} from "../commands/ListSessionsCommand";
import { SigninClient } from "../SigninClient";
import type { SigninPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListSessions: (
  config: SigninPaginationConfiguration,
  input: ListSessionsCommandInput,
  ...rest: any[]
) => Paginator<ListSessionsCommandOutput> = createPaginator<
  SigninPaginationConfiguration,
  ListSessionsCommandInput,
  ListSessionsCommandOutput
>(SigninClient, ListSessionsCommand, "nextToken", "nextToken", "maxResults");
