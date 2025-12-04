// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListGeofencesCommand,
  ListGeofencesCommandInput,
  ListGeofencesCommandOutput,
} from "../commands/ListGeofencesCommand";
import { LocationClient } from "../LocationClient";
import { LocationPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListGeofences: (
  config: LocationPaginationConfiguration,
  input: ListGeofencesCommandInput,
  ...rest: any[]
) => Paginator<ListGeofencesCommandOutput> = createPaginator<
  LocationPaginationConfiguration,
  ListGeofencesCommandInput,
  ListGeofencesCommandOutput
>(LocationClient, ListGeofencesCommand, "NextToken", "NextToken", "MaxResults");
