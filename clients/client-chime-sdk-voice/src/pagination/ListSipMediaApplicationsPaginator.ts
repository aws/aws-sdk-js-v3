// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import { ChimeSDKVoiceClient } from "../ChimeSDKVoiceClient";
import {
  ListSipMediaApplicationsCommand,
  ListSipMediaApplicationsCommandInput,
  ListSipMediaApplicationsCommandOutput,
} from "../commands/ListSipMediaApplicationsCommand";
import { ChimeSDKVoicePaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListSipMediaApplications: (
  config: ChimeSDKVoicePaginationConfiguration,
  input: ListSipMediaApplicationsCommandInput,
  ...rest: any[]
) => Paginator<ListSipMediaApplicationsCommandOutput> = createPaginator<
  ChimeSDKVoicePaginationConfiguration,
  ListSipMediaApplicationsCommandInput,
  ListSipMediaApplicationsCommandOutput
>(ChimeSDKVoiceClient, ListSipMediaApplicationsCommand, "NextToken", "NextToken", "MaxResults");
