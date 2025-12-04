// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListPrefetchSchedulesCommand,
  ListPrefetchSchedulesCommandInput,
  ListPrefetchSchedulesCommandOutput,
} from "../commands/ListPrefetchSchedulesCommand";
import { MediaTailorClient } from "../MediaTailorClient";
import { MediaTailorPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListPrefetchSchedules: (
  config: MediaTailorPaginationConfiguration,
  input: ListPrefetchSchedulesCommandInput,
  ...rest: any[]
) => Paginator<ListPrefetchSchedulesCommandOutput> = createPaginator<
  MediaTailorPaginationConfiguration,
  ListPrefetchSchedulesCommandInput,
  ListPrefetchSchedulesCommandOutput
>(MediaTailorClient, ListPrefetchSchedulesCommand, "NextToken", "NextToken", "MaxResults");
