// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import { ListModelsCommand, ListModelsCommandInput, ListModelsCommandOutput } from "../commands/ListModelsCommand";
import { QConnectClient } from "../QConnectClient";
import type { QConnectPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListModels: (
  config: QConnectPaginationConfiguration,
  input: ListModelsCommandInput,
  ...rest: any[]
) => Paginator<ListModelsCommandOutput> = createPaginator<
  QConnectPaginationConfiguration,
  ListModelsCommandInput,
  ListModelsCommandOutput
>(QConnectClient, ListModelsCommand, "nextToken", "nextToken", "maxResults");
