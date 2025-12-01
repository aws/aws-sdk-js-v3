// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import { CleanRoomsMLClient } from "../CleanRoomsMLClient";
import {
  ListCollaborationConfiguredModelAlgorithmAssociationsCommand,
  ListCollaborationConfiguredModelAlgorithmAssociationsCommandInput,
  ListCollaborationConfiguredModelAlgorithmAssociationsCommandOutput,
} from "../commands/ListCollaborationConfiguredModelAlgorithmAssociationsCommand";
import { CleanRoomsMLPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListCollaborationConfiguredModelAlgorithmAssociations: (
  config: CleanRoomsMLPaginationConfiguration,
  input: ListCollaborationConfiguredModelAlgorithmAssociationsCommandInput,
  ...rest: any[]
) => Paginator<ListCollaborationConfiguredModelAlgorithmAssociationsCommandOutput> = createPaginator<
  CleanRoomsMLPaginationConfiguration,
  ListCollaborationConfiguredModelAlgorithmAssociationsCommandInput,
  ListCollaborationConfiguredModelAlgorithmAssociationsCommandOutput
>(
  CleanRoomsMLClient,
  ListCollaborationConfiguredModelAlgorithmAssociationsCommand,
  "nextToken",
  "nextToken",
  "maxResults"
);
