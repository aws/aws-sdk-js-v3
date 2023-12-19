// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import { Paginator } from "@smithy/types";

import { ChimeClient } from "../ChimeClient";
import {
  ListVoiceConnectorGroupsCommand,
  ListVoiceConnectorGroupsCommandInput,
  ListVoiceConnectorGroupsCommandOutput,
} from "../commands/ListVoiceConnectorGroupsCommand";
import { ChimePaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListVoiceConnectorGroups: (
  config: ChimePaginationConfiguration,
  input: ListVoiceConnectorGroupsCommandInput,
  ...rest: any[]
) => Paginator<ListVoiceConnectorGroupsCommandOutput> = createPaginator<
  ChimePaginationConfiguration,
  ListVoiceConnectorGroupsCommandInput,
  ListVoiceConnectorGroupsCommandOutput
>(ChimeClient, ListVoiceConnectorGroupsCommand, "NextToken", "NextToken", "MaxResults");
