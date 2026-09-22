// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import { CloudWatchOmniClient } from "../CloudWatchOmniClient";
import {
  ListAccessGrantsCommand,
  ListAccessGrantsCommandInput,
  ListAccessGrantsCommandOutput,
} from "../commands/ListAccessGrantsCommand";
import type { CloudWatchOmniPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListAccessGrants: (
  config: CloudWatchOmniPaginationConfiguration,
  input: ListAccessGrantsCommandInput,
  ...rest: any[]
) => Paginator<ListAccessGrantsCommandOutput> = createPaginator<
  CloudWatchOmniPaginationConfiguration,
  ListAccessGrantsCommandInput,
  ListAccessGrantsCommandOutput
>(CloudWatchOmniClient, ListAccessGrantsCommand, "nextToken", "nextToken", "maxResults");
