// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListAccountAliasesCommand,
  ListAccountAliasesCommandInput,
  ListAccountAliasesCommandOutput,
} from "../commands/ListAccountAliasesCommand";
import { IAMClient } from "../IAMClient";
import { IAMPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListAccountAliases: (
  config: IAMPaginationConfiguration,
  input: ListAccountAliasesCommandInput,
  ...rest: any[]
) => Paginator<ListAccountAliasesCommandOutput> = createPaginator<
  IAMPaginationConfiguration,
  ListAccountAliasesCommandInput,
  ListAccountAliasesCommandOutput
>(IAMClient, ListAccountAliasesCommand, "Marker", "Marker", "MaxItems");
