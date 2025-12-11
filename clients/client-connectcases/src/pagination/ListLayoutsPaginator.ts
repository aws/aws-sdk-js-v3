// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import { ListLayoutsCommand, ListLayoutsCommandInput, ListLayoutsCommandOutput } from "../commands/ListLayoutsCommand";
import { ConnectCasesClient } from "../ConnectCasesClient";
import { ConnectCasesPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListLayouts: (
  config: ConnectCasesPaginationConfiguration,
  input: ListLayoutsCommandInput,
  ...rest: any[]
) => Paginator<ListLayoutsCommandOutput> = createPaginator<
  ConnectCasesPaginationConfiguration,
  ListLayoutsCommandInput,
  ListLayoutsCommandOutput
>(ConnectCasesClient, ListLayoutsCommand, "nextToken", "nextToken", "maxResults");
