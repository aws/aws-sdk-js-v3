// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import { ListAliasesCommand, ListAliasesCommandInput, ListAliasesCommandOutput } from "../commands/ListAliasesCommand";
import { GameLiftClient } from "../GameLiftClient";
import { GameLiftPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListAliases: (
  config: GameLiftPaginationConfiguration,
  input: ListAliasesCommandInput,
  ...rest: any[]
) => Paginator<ListAliasesCommandOutput> = createPaginator<
  GameLiftPaginationConfiguration,
  ListAliasesCommandInput,
  ListAliasesCommandOutput
>(GameLiftClient, ListAliasesCommand, "NextToken", "NextToken", "Limit");
