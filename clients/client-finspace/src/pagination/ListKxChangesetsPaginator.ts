// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListKxChangesetsCommand,
  ListKxChangesetsCommandInput,
  ListKxChangesetsCommandOutput,
} from "../commands/ListKxChangesetsCommand";
import { FinspaceClient } from "../FinspaceClient";
import { FinspacePaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListKxChangesets: (
  config: FinspacePaginationConfiguration,
  input: ListKxChangesetsCommandInput,
  ...rest: any[]
) => Paginator<ListKxChangesetsCommandOutput> = createPaginator<
  FinspacePaginationConfiguration,
  ListKxChangesetsCommandInput,
  ListKxChangesetsCommandOutput
>(FinspaceClient, ListKxChangesetsCommand, "nextToken", "nextToken", "maxResults");
