// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import { ChimeSDKVoiceClient } from "../ChimeSDKVoiceClient";
import {
  ListPhoneNumberOrdersCommand,
  ListPhoneNumberOrdersCommandInput,
  ListPhoneNumberOrdersCommandOutput,
} from "../commands/ListPhoneNumberOrdersCommand";
import { ChimeSDKVoicePaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListPhoneNumberOrders: (
  config: ChimeSDKVoicePaginationConfiguration,
  input: ListPhoneNumberOrdersCommandInput,
  ...rest: any[]
) => Paginator<ListPhoneNumberOrdersCommandOutput> = createPaginator<
  ChimeSDKVoicePaginationConfiguration,
  ListPhoneNumberOrdersCommandInput,
  ListPhoneNumberOrdersCommandOutput
>(ChimeSDKVoiceClient, ListPhoneNumberOrdersCommand, "NextToken", "NextToken", "MaxResults");
