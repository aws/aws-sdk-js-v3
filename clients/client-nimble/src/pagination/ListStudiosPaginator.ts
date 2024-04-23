// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import { Paginator } from "@smithy/types";

import { ListStudiosCommand, ListStudiosCommandInput, ListStudiosCommandOutput } from "../commands/ListStudiosCommand";
import { NimbleClient } from "../NimbleClient";
import { NimblePaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListStudios: (
  config: NimblePaginationConfiguration,
  input: ListStudiosCommandInput,
  ...rest: any[]
) => Paginator<ListStudiosCommandOutput> = createPaginator<
  NimblePaginationConfiguration,
  ListStudiosCommandInput,
  ListStudiosCommandOutput
>(NimbleClient, ListStudiosCommand, "nextToken", "nextToken", "");
