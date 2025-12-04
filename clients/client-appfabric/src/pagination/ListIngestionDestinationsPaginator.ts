// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import { AppFabricClient } from "../AppFabricClient";
import {
  ListIngestionDestinationsCommand,
  ListIngestionDestinationsCommandInput,
  ListIngestionDestinationsCommandOutput,
} from "../commands/ListIngestionDestinationsCommand";
import { AppFabricPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListIngestionDestinations: (
  config: AppFabricPaginationConfiguration,
  input: ListIngestionDestinationsCommandInput,
  ...rest: any[]
) => Paginator<ListIngestionDestinationsCommandOutput> = createPaginator<
  AppFabricPaginationConfiguration,
  ListIngestionDestinationsCommandInput,
  ListIngestionDestinationsCommandOutput
>(AppFabricClient, ListIngestionDestinationsCommand, "nextToken", "nextToken", "maxResults");
