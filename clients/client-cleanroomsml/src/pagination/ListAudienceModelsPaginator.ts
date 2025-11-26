// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import { CleanRoomsMLClient } from "../CleanRoomsMLClient";
import {
  ListAudienceModelsCommand,
  ListAudienceModelsCommandInput,
  ListAudienceModelsCommandOutput,
} from "../commands/ListAudienceModelsCommand";
import { CleanRoomsMLPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListAudienceModels: (
  config: CleanRoomsMLPaginationConfiguration,
  input: ListAudienceModelsCommandInput,
  ...rest: any[]
) => Paginator<ListAudienceModelsCommandOutput> = createPaginator<
  CleanRoomsMLPaginationConfiguration,
  ListAudienceModelsCommandInput,
  ListAudienceModelsCommandOutput
>(CleanRoomsMLClient, ListAudienceModelsCommand, "nextToken", "nextToken", "maxResults");
