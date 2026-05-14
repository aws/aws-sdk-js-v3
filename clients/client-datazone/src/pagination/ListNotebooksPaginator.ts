// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListNotebooksCommand,
  ListNotebooksCommandInput,
  ListNotebooksCommandOutput,
} from "../commands/ListNotebooksCommand";
import { DataZoneClient } from "../DataZoneClient";
import type { DataZonePaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListNotebooks: (
  config: DataZonePaginationConfiguration,
  input: ListNotebooksCommandInput,
  ...rest: any[]
) => Paginator<ListNotebooksCommandOutput> = createPaginator<
  DataZonePaginationConfiguration,
  ListNotebooksCommandInput,
  ListNotebooksCommandOutput
>(DataZoneClient, ListNotebooksCommand, "nextToken", "nextToken", "maxResults");
