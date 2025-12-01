// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import { ChimeSDKVoiceClient } from "../ChimeSDKVoiceClient";
import {
  ListPhoneNumbersCommand,
  ListPhoneNumbersCommandInput,
  ListPhoneNumbersCommandOutput,
} from "../commands/ListPhoneNumbersCommand";
import { ChimeSDKVoicePaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListPhoneNumbers: (
  config: ChimeSDKVoicePaginationConfiguration,
  input: ListPhoneNumbersCommandInput,
  ...rest: any[]
) => Paginator<ListPhoneNumbersCommandOutput> = createPaginator<
  ChimeSDKVoicePaginationConfiguration,
  ListPhoneNumbersCommandInput,
  ListPhoneNumbersCommandOutput
>(ChimeSDKVoiceClient, ListPhoneNumbersCommand, "NextToken", "NextToken", "MaxResults");
