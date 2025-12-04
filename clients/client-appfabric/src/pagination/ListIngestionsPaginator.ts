// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import { AppFabricClient } from "../AppFabricClient";
import {
  ListIngestionsCommand,
  ListIngestionsCommandInput,
  ListIngestionsCommandOutput,
} from "../commands/ListIngestionsCommand";
import { AppFabricPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListIngestions: (
  config: AppFabricPaginationConfiguration,
  input: ListIngestionsCommandInput,
  ...rest: any[]
) => Paginator<ListIngestionsCommandOutput> = createPaginator<
  AppFabricPaginationConfiguration,
  ListIngestionsCommandInput,
  ListIngestionsCommandOutput
>(AppFabricClient, ListIngestionsCommand, "nextToken", "nextToken", "maxResults");
