// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListReplicationBackfillsCommand,
  ListReplicationBackfillsCommandInput,
  ListReplicationBackfillsCommandOutput,
} from "../commands/ListReplicationBackfillsCommand";
import { ECRClient } from "../ECRClient";
import type { ECRPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListReplicationBackfills: (
  config: ECRPaginationConfiguration,
  input: ListReplicationBackfillsCommandInput,
  ...rest: any[]
) => Paginator<ListReplicationBackfillsCommandOutput> = createPaginator<
  ECRPaginationConfiguration,
  ListReplicationBackfillsCommandInput,
  ListReplicationBackfillsCommandOutput
>(ECRClient, ListReplicationBackfillsCommand, "nextToken", "nextToken", "maxResults");
