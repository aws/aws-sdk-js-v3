// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListRetrieversCommand,
  ListRetrieversCommandInput,
  ListRetrieversCommandOutput,
} from "../commands/ListRetrieversCommand";
import { QBusinessClient } from "../QBusinessClient";
import { QBusinessPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListRetrievers: (
  config: QBusinessPaginationConfiguration,
  input: ListRetrieversCommandInput,
  ...rest: any[]
) => Paginator<ListRetrieversCommandOutput> = createPaginator<
  QBusinessPaginationConfiguration,
  ListRetrieversCommandInput,
  ListRetrieversCommandOutput
>(QBusinessClient, ListRetrieversCommand, "nextToken", "nextToken", "maxResults");
