// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import { Paginator } from "@smithy/types";

import { CleanRoomsMLClient } from "../CleanRoomsMLClient";
import {
  ListTrainedModelVersionsCommand,
  ListTrainedModelVersionsCommandInput,
  ListTrainedModelVersionsCommandOutput,
} from "../commands/ListTrainedModelVersionsCommand";
import { CleanRoomsMLPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListTrainedModelVersions: (
  config: CleanRoomsMLPaginationConfiguration,
  input: ListTrainedModelVersionsCommandInput,
  ...rest: any[]
) => Paginator<ListTrainedModelVersionsCommandOutput> = createPaginator<
  CleanRoomsMLPaginationConfiguration,
  ListTrainedModelVersionsCommandInput,
  ListTrainedModelVersionsCommandOutput
>(CleanRoomsMLClient, ListTrainedModelVersionsCommand, "nextToken", "nextToken", "maxResults");
