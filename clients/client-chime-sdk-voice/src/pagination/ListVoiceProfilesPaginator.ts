// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import { ChimeSDKVoiceClient } from "../ChimeSDKVoiceClient";
import {
  ListVoiceProfilesCommand,
  ListVoiceProfilesCommandInput,
  ListVoiceProfilesCommandOutput,
} from "../commands/ListVoiceProfilesCommand";
import { ChimeSDKVoicePaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListVoiceProfiles: (
  config: ChimeSDKVoicePaginationConfiguration,
  input: ListVoiceProfilesCommandInput,
  ...rest: any[]
) => Paginator<ListVoiceProfilesCommandOutput> = createPaginator<
  ChimeSDKVoicePaginationConfiguration,
  ListVoiceProfilesCommandInput,
  ListVoiceProfilesCommandOutput
>(ChimeSDKVoiceClient, ListVoiceProfilesCommand, "NextToken", "NextToken", "MaxResults");
