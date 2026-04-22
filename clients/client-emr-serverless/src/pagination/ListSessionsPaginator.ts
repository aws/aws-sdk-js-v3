// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListSessionsCommand,
  ListSessionsCommandInput,
  ListSessionsCommandOutput,
} from "../commands/ListSessionsCommand";
import { EMRServerlessClient } from "../EMRServerlessClient";
import type { EMRServerlessPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListSessions: (
  config: EMRServerlessPaginationConfiguration,
  input: ListSessionsCommandInput,
  ...rest: any[]
) => Paginator<ListSessionsCommandOutput> = createPaginator<
  EMRServerlessPaginationConfiguration,
  ListSessionsCommandInput,
  ListSessionsCommandOutput
>(EMRServerlessClient, ListSessionsCommand, "nextToken", "nextToken", "maxResults");
