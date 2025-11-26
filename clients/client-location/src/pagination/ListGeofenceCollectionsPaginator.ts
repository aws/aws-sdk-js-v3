// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListGeofenceCollectionsCommand,
  ListGeofenceCollectionsCommandInput,
  ListGeofenceCollectionsCommandOutput,
} from "../commands/ListGeofenceCollectionsCommand";
import { LocationClient } from "../LocationClient";
import { LocationPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListGeofenceCollections: (
  config: LocationPaginationConfiguration,
  input: ListGeofenceCollectionsCommandInput,
  ...rest: any[]
) => Paginator<ListGeofenceCollectionsCommandOutput> = createPaginator<
  LocationPaginationConfiguration,
  ListGeofenceCollectionsCommandInput,
  ListGeofenceCollectionsCommandOutput
>(LocationClient, ListGeofenceCollectionsCommand, "NextToken", "NextToken", "MaxResults");
