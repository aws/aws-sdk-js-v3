// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import { CloudWatchClient } from "../CloudWatchClient";
import {
  ListAlarmMuteRulesCommand,
  ListAlarmMuteRulesCommandInput,
  ListAlarmMuteRulesCommandOutput,
} from "../commands/ListAlarmMuteRulesCommand";
import type { CloudWatchPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListAlarmMuteRules: (
  config: CloudWatchPaginationConfiguration,
  input: ListAlarmMuteRulesCommandInput,
  ...rest: any[]
) => Paginator<ListAlarmMuteRulesCommandOutput> = createPaginator<
  CloudWatchPaginationConfiguration,
  ListAlarmMuteRulesCommandInput,
  ListAlarmMuteRulesCommandOutput
>(CloudWatchClient, ListAlarmMuteRulesCommand, "NextToken", "NextToken", "MaxRecords");
