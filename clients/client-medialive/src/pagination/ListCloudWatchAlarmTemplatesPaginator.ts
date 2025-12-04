// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListCloudWatchAlarmTemplatesCommand,
  ListCloudWatchAlarmTemplatesCommandInput,
  ListCloudWatchAlarmTemplatesCommandOutput,
} from "../commands/ListCloudWatchAlarmTemplatesCommand";
import { MediaLiveClient } from "../MediaLiveClient";
import { MediaLivePaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListCloudWatchAlarmTemplates: (
  config: MediaLivePaginationConfiguration,
  input: ListCloudWatchAlarmTemplatesCommandInput,
  ...rest: any[]
) => Paginator<ListCloudWatchAlarmTemplatesCommandOutput> = createPaginator<
  MediaLivePaginationConfiguration,
  ListCloudWatchAlarmTemplatesCommandInput,
  ListCloudWatchAlarmTemplatesCommandOutput
>(MediaLiveClient, ListCloudWatchAlarmTemplatesCommand, "NextToken", "NextToken", "MaxResults");
