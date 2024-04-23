// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import { Paginator } from "@smithy/types";

import {
  ListEulaAcceptancesCommand,
  ListEulaAcceptancesCommandInput,
  ListEulaAcceptancesCommandOutput,
} from "../commands/ListEulaAcceptancesCommand";
import { NimbleClient } from "../NimbleClient";
import { NimblePaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListEulaAcceptances: (
  config: NimblePaginationConfiguration,
  input: ListEulaAcceptancesCommandInput,
  ...rest: any[]
) => Paginator<ListEulaAcceptancesCommandOutput> = createPaginator<
  NimblePaginationConfiguration,
  ListEulaAcceptancesCommandInput,
  ListEulaAcceptancesCommandOutput
>(NimbleClient, ListEulaAcceptancesCommand, "nextToken", "nextToken", "");
