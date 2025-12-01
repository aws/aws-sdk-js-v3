// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListSourceLocationsCommand,
  ListSourceLocationsCommandInput,
  ListSourceLocationsCommandOutput,
} from "../commands/ListSourceLocationsCommand";
import { MediaTailorClient } from "../MediaTailorClient";
import { MediaTailorPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListSourceLocations: (
  config: MediaTailorPaginationConfiguration,
  input: ListSourceLocationsCommandInput,
  ...rest: any[]
) => Paginator<ListSourceLocationsCommandOutput> = createPaginator<
  MediaTailorPaginationConfiguration,
  ListSourceLocationsCommandInput,
  ListSourceLocationsCommandOutput
>(MediaTailorClient, ListSourceLocationsCommand, "NextToken", "NextToken", "MaxResults");
