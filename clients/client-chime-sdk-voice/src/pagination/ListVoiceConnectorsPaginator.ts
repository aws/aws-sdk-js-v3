// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import { ChimeSDKVoiceClient } from "../ChimeSDKVoiceClient";
import {
  ListVoiceConnectorsCommand,
  ListVoiceConnectorsCommandInput,
  ListVoiceConnectorsCommandOutput,
} from "../commands/ListVoiceConnectorsCommand";
import { ChimeSDKVoicePaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListVoiceConnectors: (
  config: ChimeSDKVoicePaginationConfiguration,
  input: ListVoiceConnectorsCommandInput,
  ...rest: any[]
) => Paginator<ListVoiceConnectorsCommandOutput> = createPaginator<
  ChimeSDKVoicePaginationConfiguration,
  ListVoiceConnectorsCommandInput,
  ListVoiceConnectorsCommandOutput
>(ChimeSDKVoiceClient, ListVoiceConnectorsCommand, "NextToken", "NextToken", "MaxResults");
