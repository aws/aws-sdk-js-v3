// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import { ListAliasesCommand, ListAliasesCommandInput, ListAliasesCommandOutput } from "../commands/ListAliasesCommand";
import { LambdaClient } from "../LambdaClient";
import { LambdaPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListAliases: (
  config: LambdaPaginationConfiguration,
  input: ListAliasesCommandInput,
  ...rest: any[]
) => Paginator<ListAliasesCommandOutput> = createPaginator<
  LambdaPaginationConfiguration,
  ListAliasesCommandInput,
  ListAliasesCommandOutput
>(LambdaClient, ListAliasesCommand, "Marker", "NextMarker", "MaxItems");
