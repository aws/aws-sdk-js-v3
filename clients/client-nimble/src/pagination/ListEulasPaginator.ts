// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import { Paginator } from "@smithy/types";

import { ListEulasCommand, ListEulasCommandInput, ListEulasCommandOutput } from "../commands/ListEulasCommand";
import { NimbleClient } from "../NimbleClient";
import { NimblePaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListEulas: (
  config: NimblePaginationConfiguration,
  input: ListEulasCommandInput,
  ...rest: any[]
) => Paginator<ListEulasCommandOutput> = createPaginator<
  NimblePaginationConfiguration,
  ListEulasCommandInput,
  ListEulasCommandOutput
>(NimbleClient, ListEulasCommand, "nextToken", "nextToken", "");
