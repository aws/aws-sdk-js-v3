// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import { Paginator } from "@smithy/types";

import { ChimeClient } from "../ChimeClient";
import {
  ListVoiceConnectorsCommand,
  ListVoiceConnectorsCommandInput,
  ListVoiceConnectorsCommandOutput,
} from "../commands/ListVoiceConnectorsCommand";
import { ChimePaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListVoiceConnectors: (
  config: ChimePaginationConfiguration,
  input: ListVoiceConnectorsCommandInput,
  ...rest: any[]
) => Paginator<ListVoiceConnectorsCommandOutput> = createPaginator<
  ChimePaginationConfiguration,
  ListVoiceConnectorsCommandInput,
  ListVoiceConnectorsCommandOutput
>(ChimeClient, ListVoiceConnectorsCommand, "NextToken", "NextToken", "MaxResults");
