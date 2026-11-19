// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListAvailableModuleVersionsCommand,
  ListAvailableModuleVersionsCommandInput,
  ListAvailableModuleVersionsCommandOutput,
} from "../commands/ListAvailableModuleVersionsCommand";
import { RTBFabricClient } from "../RTBFabricClient";
import type { RTBFabricPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListAvailableModuleVersions: (
  config: RTBFabricPaginationConfiguration,
  input: ListAvailableModuleVersionsCommandInput,
  ...rest: any[]
) => Paginator<ListAvailableModuleVersionsCommandOutput> = createPaginator<
  RTBFabricPaginationConfiguration,
  ListAvailableModuleVersionsCommandInput,
  ListAvailableModuleVersionsCommandOutput
>(RTBFabricClient, ListAvailableModuleVersionsCommand, "nextToken", "nextToken", "maxResults");
