// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import { Paginator } from "@smithy/types";

import { CleanRoomsMLClient } from "../CleanRoomsMLClient";
import {
  ListConfiguredModelAlgorithmsCommand,
  ListConfiguredModelAlgorithmsCommandInput,
  ListConfiguredModelAlgorithmsCommandOutput,
} from "../commands/ListConfiguredModelAlgorithmsCommand";
import { CleanRoomsMLPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListConfiguredModelAlgorithms: (
  config: CleanRoomsMLPaginationConfiguration,
  input: ListConfiguredModelAlgorithmsCommandInput,
  ...rest: any[]
) => Paginator<ListConfiguredModelAlgorithmsCommandOutput> = createPaginator<
  CleanRoomsMLPaginationConfiguration,
  ListConfiguredModelAlgorithmsCommandInput,
  ListConfiguredModelAlgorithmsCommandOutput
>(CleanRoomsMLClient, ListConfiguredModelAlgorithmsCommand, "nextToken", "nextToken", "maxResults");
