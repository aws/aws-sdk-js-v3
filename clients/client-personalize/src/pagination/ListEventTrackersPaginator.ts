// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListEventTrackersCommand,
  ListEventTrackersCommandInput,
  ListEventTrackersCommandOutput,
} from "../commands/ListEventTrackersCommand";
import { PersonalizeClient } from "../PersonalizeClient";
import { PersonalizePaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListEventTrackers: (
  config: PersonalizePaginationConfiguration,
  input: ListEventTrackersCommandInput,
  ...rest: any[]
) => Paginator<ListEventTrackersCommandOutput> = createPaginator<
  PersonalizePaginationConfiguration,
  ListEventTrackersCommandInput,
  ListEventTrackersCommandOutput
>(PersonalizeClient, ListEventTrackersCommand, "nextToken", "nextToken", "maxResults");
