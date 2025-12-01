// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import { ChimeSDKVoiceClient } from "../ChimeSDKVoiceClient";
import {
  ListSipRulesCommand,
  ListSipRulesCommandInput,
  ListSipRulesCommandOutput,
} from "../commands/ListSipRulesCommand";
import { ChimeSDKVoicePaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListSipRules: (
  config: ChimeSDKVoicePaginationConfiguration,
  input: ListSipRulesCommandInput,
  ...rest: any[]
) => Paginator<ListSipRulesCommandOutput> = createPaginator<
  ChimeSDKVoicePaginationConfiguration,
  ListSipRulesCommandInput,
  ListSipRulesCommandOutput
>(ChimeSDKVoiceClient, ListSipRulesCommand, "NextToken", "NextToken", "MaxResults");
