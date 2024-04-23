// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import { Paginator } from "@smithy/types";

import {
  ListTableColumnsCommand,
  ListTableColumnsCommandInput,
  ListTableColumnsCommandOutput,
} from "../commands/ListTableColumnsCommand";
import { HoneycodeClient } from "../HoneycodeClient";
import { HoneycodePaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListTableColumns: (
  config: HoneycodePaginationConfiguration,
  input: ListTableColumnsCommandInput,
  ...rest: any[]
) => Paginator<ListTableColumnsCommandOutput> = createPaginator<
  HoneycodePaginationConfiguration,
  ListTableColumnsCommandInput,
  ListTableColumnsCommandOutput
>(HoneycodeClient, ListTableColumnsCommand, "nextToken", "nextToken", "");
