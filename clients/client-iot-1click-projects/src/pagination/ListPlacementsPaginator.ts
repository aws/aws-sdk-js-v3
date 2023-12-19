// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import { Paginator } from "@smithy/types";

import {
  ListPlacementsCommand,
  ListPlacementsCommandInput,
  ListPlacementsCommandOutput,
} from "../commands/ListPlacementsCommand";
import { IoT1ClickProjectsClient } from "../IoT1ClickProjectsClient";
import { IoT1ClickProjectsPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListPlacements: (
  config: IoT1ClickProjectsPaginationConfiguration,
  input: ListPlacementsCommandInput,
  ...rest: any[]
) => Paginator<ListPlacementsCommandOutput> = createPaginator<
  IoT1ClickProjectsPaginationConfiguration,
  ListPlacementsCommandInput,
  ListPlacementsCommandOutput
>(IoT1ClickProjectsClient, ListPlacementsCommand, "nextToken", "nextToken", "maxResults");
