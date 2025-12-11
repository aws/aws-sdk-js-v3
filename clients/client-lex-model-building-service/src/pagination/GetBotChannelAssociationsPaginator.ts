// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  GetBotChannelAssociationsCommand,
  GetBotChannelAssociationsCommandInput,
  GetBotChannelAssociationsCommandOutput,
} from "../commands/GetBotChannelAssociationsCommand";
import { LexModelBuildingServiceClient } from "../LexModelBuildingServiceClient";
import { LexModelBuildingServicePaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateGetBotChannelAssociations: (
  config: LexModelBuildingServicePaginationConfiguration,
  input: GetBotChannelAssociationsCommandInput,
  ...rest: any[]
) => Paginator<GetBotChannelAssociationsCommandOutput> = createPaginator<
  LexModelBuildingServicePaginationConfiguration,
  GetBotChannelAssociationsCommandInput,
  GetBotChannelAssociationsCommandOutput
>(LexModelBuildingServiceClient, GetBotChannelAssociationsCommand, "nextToken", "nextToken", "maxResults");
