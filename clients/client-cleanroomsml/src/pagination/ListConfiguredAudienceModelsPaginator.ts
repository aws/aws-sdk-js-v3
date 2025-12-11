// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import { CleanRoomsMLClient } from "../CleanRoomsMLClient";
import {
  ListConfiguredAudienceModelsCommand,
  ListConfiguredAudienceModelsCommandInput,
  ListConfiguredAudienceModelsCommandOutput,
} from "../commands/ListConfiguredAudienceModelsCommand";
import { CleanRoomsMLPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListConfiguredAudienceModels: (
  config: CleanRoomsMLPaginationConfiguration,
  input: ListConfiguredAudienceModelsCommandInput,
  ...rest: any[]
) => Paginator<ListConfiguredAudienceModelsCommandOutput> = createPaginator<
  CleanRoomsMLPaginationConfiguration,
  ListConfiguredAudienceModelsCommandInput,
  ListConfiguredAudienceModelsCommandOutput
>(CleanRoomsMLClient, ListConfiguredAudienceModelsCommand, "nextToken", "nextToken", "maxResults");
