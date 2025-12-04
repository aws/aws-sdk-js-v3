// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import { ChimeSDKVoiceClient } from "../ChimeSDKVoiceClient";
import {
  ListProxySessionsCommand,
  ListProxySessionsCommandInput,
  ListProxySessionsCommandOutput,
} from "../commands/ListProxySessionsCommand";
import { ChimeSDKVoicePaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListProxySessions: (
  config: ChimeSDKVoicePaginationConfiguration,
  input: ListProxySessionsCommandInput,
  ...rest: any[]
) => Paginator<ListProxySessionsCommandOutput> = createPaginator<
  ChimeSDKVoicePaginationConfiguration,
  ListProxySessionsCommandInput,
  ListProxySessionsCommandOutput
>(ChimeSDKVoiceClient, ListProxySessionsCommand, "NextToken", "NextToken", "MaxResults");
