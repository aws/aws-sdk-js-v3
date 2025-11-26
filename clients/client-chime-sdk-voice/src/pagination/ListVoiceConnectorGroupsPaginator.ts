// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import { ChimeSDKVoiceClient } from "../ChimeSDKVoiceClient";
import {
  ListVoiceConnectorGroupsCommand,
  ListVoiceConnectorGroupsCommandInput,
  ListVoiceConnectorGroupsCommandOutput,
} from "../commands/ListVoiceConnectorGroupsCommand";
import { ChimeSDKVoicePaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListVoiceConnectorGroups: (
  config: ChimeSDKVoicePaginationConfiguration,
  input: ListVoiceConnectorGroupsCommandInput,
  ...rest: any[]
) => Paginator<ListVoiceConnectorGroupsCommandOutput> = createPaginator<
  ChimeSDKVoicePaginationConfiguration,
  ListVoiceConnectorGroupsCommandInput,
  ListVoiceConnectorGroupsCommandOutput
>(ChimeSDKVoiceClient, ListVoiceConnectorGroupsCommand, "NextToken", "NextToken", "MaxResults");
