// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListKxDataviewsCommand,
  ListKxDataviewsCommandInput,
  ListKxDataviewsCommandOutput,
} from "../commands/ListKxDataviewsCommand";
import { FinspaceClient } from "../FinspaceClient";
import { FinspacePaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListKxDataviews: (
  config: FinspacePaginationConfiguration,
  input: ListKxDataviewsCommandInput,
  ...rest: any[]
) => Paginator<ListKxDataviewsCommandOutput> = createPaginator<
  FinspacePaginationConfiguration,
  ListKxDataviewsCommandInput,
  ListKxDataviewsCommandOutput
>(FinspaceClient, ListKxDataviewsCommand, "nextToken", "nextToken", "maxResults");
