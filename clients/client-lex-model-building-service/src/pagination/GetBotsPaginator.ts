// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import { GetBotsCommand, GetBotsCommandInput, GetBotsCommandOutput } from "../commands/GetBotsCommand";
import { LexModelBuildingServiceClient } from "../LexModelBuildingServiceClient";
import { LexModelBuildingServicePaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateGetBots: (
  config: LexModelBuildingServicePaginationConfiguration,
  input: GetBotsCommandInput,
  ...rest: any[]
) => Paginator<GetBotsCommandOutput> = createPaginator<
  LexModelBuildingServicePaginationConfiguration,
  GetBotsCommandInput,
  GetBotsCommandOutput
>(LexModelBuildingServiceClient, GetBotsCommand, "nextToken", "nextToken", "maxResults");
