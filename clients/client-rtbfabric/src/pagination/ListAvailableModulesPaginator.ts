// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListAvailableModulesCommand,
  ListAvailableModulesCommandInput,
  ListAvailableModulesCommandOutput,
} from "../commands/ListAvailableModulesCommand";
import { RTBFabricClient } from "../RTBFabricClient";
import type { RTBFabricPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListAvailableModules: (
  config: RTBFabricPaginationConfiguration,
  input: ListAvailableModulesCommandInput,
  ...rest: any[]
) => Paginator<ListAvailableModulesCommandOutput> = createPaginator<
  RTBFabricPaginationConfiguration,
  ListAvailableModulesCommandInput,
  ListAvailableModulesCommandOutput
>(RTBFabricClient, ListAvailableModulesCommand, "nextToken", "nextToken", "maxResults");
