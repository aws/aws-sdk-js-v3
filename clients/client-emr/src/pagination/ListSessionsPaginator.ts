// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListSessionsCommand,
  ListSessionsCommandInput,
  ListSessionsCommandOutput,
} from "../commands/ListSessionsCommand";
import { EMRClient } from "../EMRClient";
import type { EMRPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListSessions: (
  config: EMRPaginationConfiguration,
  input: ListSessionsCommandInput,
  ...rest: any[]
) => Paginator<ListSessionsCommandOutput> = createPaginator<
  EMRPaginationConfiguration,
  ListSessionsCommandInput,
  ListSessionsCommandOutput
>(EMRClient, ListSessionsCommand, "NextToken", "NextToken", "");
