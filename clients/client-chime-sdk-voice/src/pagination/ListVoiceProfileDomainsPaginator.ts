// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import { ChimeSDKVoiceClient } from "../ChimeSDKVoiceClient";
import {
  ListVoiceProfileDomainsCommand,
  ListVoiceProfileDomainsCommandInput,
  ListVoiceProfileDomainsCommandOutput,
} from "../commands/ListVoiceProfileDomainsCommand";
import { ChimeSDKVoicePaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListVoiceProfileDomains: (
  config: ChimeSDKVoicePaginationConfiguration,
  input: ListVoiceProfileDomainsCommandInput,
  ...rest: any[]
) => Paginator<ListVoiceProfileDomainsCommandOutput> = createPaginator<
  ChimeSDKVoicePaginationConfiguration,
  ListVoiceProfileDomainsCommandInput,
  ListVoiceProfileDomainsCommandOutput
>(ChimeSDKVoiceClient, ListVoiceProfileDomainsCommand, "NextToken", "NextToken", "MaxResults");
