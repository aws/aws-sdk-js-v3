// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import { Paginator } from "@smithy/types";

import {
  ListDataAccessorsCommand,
  ListDataAccessorsCommandInput,
  ListDataAccessorsCommandOutput,
} from "../commands/ListDataAccessorsCommand";
import { QBusinessClient } from "../QBusinessClient";
import { QBusinessPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListDataAccessors: (
  config: QBusinessPaginationConfiguration,
  input: ListDataAccessorsCommandInput,
  ...rest: any[]
) => Paginator<ListDataAccessorsCommandOutput> = createPaginator<
  QBusinessPaginationConfiguration,
  ListDataAccessorsCommandInput,
  ListDataAccessorsCommandOutput
>(QBusinessClient, ListDataAccessorsCommand, "nextToken", "nextToken", "maxResults");
