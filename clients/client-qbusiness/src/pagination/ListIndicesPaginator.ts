// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import { ListIndicesCommand, ListIndicesCommandInput, ListIndicesCommandOutput } from "../commands/ListIndicesCommand";
import { QBusinessClient } from "../QBusinessClient";
import { QBusinessPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListIndices: (
  config: QBusinessPaginationConfiguration,
  input: ListIndicesCommandInput,
  ...rest: any[]
) => Paginator<ListIndicesCommandOutput> = createPaginator<
  QBusinessPaginationConfiguration,
  ListIndicesCommandInput,
  ListIndicesCommandOutput
>(QBusinessClient, ListIndicesCommand, "nextToken", "nextToken", "maxResults");
