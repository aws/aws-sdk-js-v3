// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListTrackersCommand,
  ListTrackersCommandInput,
  ListTrackersCommandOutput,
} from "../commands/ListTrackersCommand";
import { LocationClient } from "../LocationClient";
import { LocationPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListTrackers: (
  config: LocationPaginationConfiguration,
  input: ListTrackersCommandInput,
  ...rest: any[]
) => Paginator<ListTrackersCommandOutput> = createPaginator<
  LocationPaginationConfiguration,
  ListTrackersCommandInput,
  ListTrackersCommandOutput
>(LocationClient, ListTrackersCommand, "NextToken", "NextToken", "MaxResults");
