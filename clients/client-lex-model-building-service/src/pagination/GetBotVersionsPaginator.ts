// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  GetBotVersionsCommand,
  GetBotVersionsCommandInput,
  GetBotVersionsCommandOutput,
} from "../commands/GetBotVersionsCommand";
import { LexModelBuildingServiceClient } from "../LexModelBuildingServiceClient";
import { LexModelBuildingServicePaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateGetBotVersions: (
  config: LexModelBuildingServicePaginationConfiguration,
  input: GetBotVersionsCommandInput,
  ...rest: any[]
) => Paginator<GetBotVersionsCommandOutput> = createPaginator<
  LexModelBuildingServicePaginationConfiguration,
  GetBotVersionsCommandInput,
  GetBotVersionsCommandOutput
>(LexModelBuildingServiceClient, GetBotVersionsCommand, "nextToken", "nextToken", "maxResults");
