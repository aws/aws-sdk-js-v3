// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListCloudWatchAlarmTemplateGroupsCommand,
  ListCloudWatchAlarmTemplateGroupsCommandInput,
  ListCloudWatchAlarmTemplateGroupsCommandOutput,
} from "../commands/ListCloudWatchAlarmTemplateGroupsCommand";
import { MediaLiveClient } from "../MediaLiveClient";
import { MediaLivePaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListCloudWatchAlarmTemplateGroups: (
  config: MediaLivePaginationConfiguration,
  input: ListCloudWatchAlarmTemplateGroupsCommandInput,
  ...rest: any[]
) => Paginator<ListCloudWatchAlarmTemplateGroupsCommandOutput> = createPaginator<
  MediaLivePaginationConfiguration,
  ListCloudWatchAlarmTemplateGroupsCommandInput,
  ListCloudWatchAlarmTemplateGroupsCommandOutput
>(MediaLiveClient, ListCloudWatchAlarmTemplateGroupsCommand, "NextToken", "NextToken", "MaxResults");
