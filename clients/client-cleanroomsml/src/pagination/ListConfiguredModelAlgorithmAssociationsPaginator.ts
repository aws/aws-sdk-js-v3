// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import { Paginator } from "@smithy/types";

import { CleanRoomsMLClient } from "../CleanRoomsMLClient";
import {
  ListConfiguredModelAlgorithmAssociationsCommand,
  ListConfiguredModelAlgorithmAssociationsCommandInput,
  ListConfiguredModelAlgorithmAssociationsCommandOutput,
} from "../commands/ListConfiguredModelAlgorithmAssociationsCommand";
import { CleanRoomsMLPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListConfiguredModelAlgorithmAssociations: (
  config: CleanRoomsMLPaginationConfiguration,
  input: ListConfiguredModelAlgorithmAssociationsCommandInput,
  ...rest: any[]
) => Paginator<ListConfiguredModelAlgorithmAssociationsCommandOutput> = createPaginator<
  CleanRoomsMLPaginationConfiguration,
  ListConfiguredModelAlgorithmAssociationsCommandInput,
  ListConfiguredModelAlgorithmAssociationsCommandOutput
>(CleanRoomsMLClient, ListConfiguredModelAlgorithmAssociationsCommand, "nextToken", "nextToken", "maxResults");
