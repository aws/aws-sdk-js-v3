// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import { Paginator } from "@smithy/types";

import {
  ListTableRowsCommand,
  ListTableRowsCommandInput,
  ListTableRowsCommandOutput,
} from "../commands/ListTableRowsCommand";
import { HoneycodeClient } from "../HoneycodeClient";
import { HoneycodePaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListTableRows: (
  config: HoneycodePaginationConfiguration,
  input: ListTableRowsCommandInput,
  ...rest: any[]
) => Paginator<ListTableRowsCommandOutput> = createPaginator<
  HoneycodePaginationConfiguration,
  ListTableRowsCommandInput,
  ListTableRowsCommandOutput
>(HoneycodeClient, ListTableRowsCommand, "nextToken", "nextToken", "maxResults");
