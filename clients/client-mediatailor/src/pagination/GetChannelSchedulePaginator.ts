// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  GetChannelScheduleCommand,
  GetChannelScheduleCommandInput,
  GetChannelScheduleCommandOutput,
} from "../commands/GetChannelScheduleCommand";
import { MediaTailorClient } from "../MediaTailorClient";
import { MediaTailorPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateGetChannelSchedule: (
  config: MediaTailorPaginationConfiguration,
  input: GetChannelScheduleCommandInput,
  ...rest: any[]
) => Paginator<GetChannelScheduleCommandOutput> = createPaginator<
  MediaTailorPaginationConfiguration,
  GetChannelScheduleCommandInput,
  GetChannelScheduleCommandOutput
>(MediaTailorClient, GetChannelScheduleCommand, "NextToken", "NextToken", "MaxResults");
