// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  GetBotAliasesCommand,
  GetBotAliasesCommandInput,
  GetBotAliasesCommandOutput,
} from "../commands/GetBotAliasesCommand";
import { LexModelBuildingServiceClient } from "../LexModelBuildingServiceClient";
import { LexModelBuildingServicePaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateGetBotAliases: (
  config: LexModelBuildingServicePaginationConfiguration,
  input: GetBotAliasesCommandInput,
  ...rest: any[]
) => Paginator<GetBotAliasesCommandOutput> = createPaginator<
  LexModelBuildingServicePaginationConfiguration,
  GetBotAliasesCommandInput,
  GetBotAliasesCommandOutput
>(LexModelBuildingServiceClient, GetBotAliasesCommand, "nextToken", "nextToken", "maxResults");
