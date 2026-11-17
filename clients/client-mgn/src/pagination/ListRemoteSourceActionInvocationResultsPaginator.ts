// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListRemoteSourceActionInvocationResultsCommand,
  ListRemoteSourceActionInvocationResultsCommandInput,
  ListRemoteSourceActionInvocationResultsCommandOutput,
} from "../commands/ListRemoteSourceActionInvocationResultsCommand";
import { MgnClient } from "../MgnClient";
import type { MgnPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListRemoteSourceActionInvocationResults: (
  config: MgnPaginationConfiguration,
  input: ListRemoteSourceActionInvocationResultsCommandInput,
  ...rest: any[]
) => Paginator<ListRemoteSourceActionInvocationResultsCommandOutput> = createPaginator<
  MgnPaginationConfiguration,
  ListRemoteSourceActionInvocationResultsCommandInput,
  ListRemoteSourceActionInvocationResultsCommandOutput
>(MgnClient, ListRemoteSourceActionInvocationResultsCommand, "nextToken", "nextToken", "maxResults");
