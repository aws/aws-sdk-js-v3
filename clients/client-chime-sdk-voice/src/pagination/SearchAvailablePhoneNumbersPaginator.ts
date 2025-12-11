// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import { ChimeSDKVoiceClient } from "../ChimeSDKVoiceClient";
import {
  SearchAvailablePhoneNumbersCommand,
  SearchAvailablePhoneNumbersCommandInput,
  SearchAvailablePhoneNumbersCommandOutput,
} from "../commands/SearchAvailablePhoneNumbersCommand";
import { ChimeSDKVoicePaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateSearchAvailablePhoneNumbers: (
  config: ChimeSDKVoicePaginationConfiguration,
  input: SearchAvailablePhoneNumbersCommandInput,
  ...rest: any[]
) => Paginator<SearchAvailablePhoneNumbersCommandOutput> = createPaginator<
  ChimeSDKVoicePaginationConfiguration,
  SearchAvailablePhoneNumbersCommandInput,
  SearchAvailablePhoneNumbersCommandOutput
>(ChimeSDKVoiceClient, SearchAvailablePhoneNumbersCommand, "NextToken", "NextToken", "MaxResults");
