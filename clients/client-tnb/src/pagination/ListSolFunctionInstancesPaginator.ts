// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListSolFunctionInstancesCommand,
  ListSolFunctionInstancesCommandInput,
  ListSolFunctionInstancesCommandOutput,
} from "../commands/ListSolFunctionInstancesCommand";
import { TnbClient } from "../TnbClient";
import { TnbPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListSolFunctionInstances: (
  config: TnbPaginationConfiguration,
  input: ListSolFunctionInstancesCommandInput,
  ...rest: any[]
) => Paginator<ListSolFunctionInstancesCommandOutput> = createPaginator<
  TnbPaginationConfiguration,
  ListSolFunctionInstancesCommandInput,
  ListSolFunctionInstancesCommandOutput
>(TnbClient, ListSolFunctionInstancesCommand, "nextToken", "nextToken", "maxResults");
