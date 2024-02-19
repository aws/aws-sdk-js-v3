// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import { Paginator } from "@smithy/types";

import { ChatbotClient } from "../ChatbotClient";
import {
  ListMicrosoftTeamsChannelConfigurationsCommand,
  ListMicrosoftTeamsChannelConfigurationsCommandInput,
  ListMicrosoftTeamsChannelConfigurationsCommandOutput,
} from "../commands/ListMicrosoftTeamsChannelConfigurationsCommand";
import { ChatbotPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListMicrosoftTeamsChannelConfigurations: (
  config: ChatbotPaginationConfiguration,
  input: ListMicrosoftTeamsChannelConfigurationsCommandInput,
  ...rest: any[]
) => Paginator<ListMicrosoftTeamsChannelConfigurationsCommandOutput> = createPaginator<
  ChatbotPaginationConfiguration,
  ListMicrosoftTeamsChannelConfigurationsCommandInput,
  ListMicrosoftTeamsChannelConfigurationsCommandOutput
>(ChatbotClient, ListMicrosoftTeamsChannelConfigurationsCommand, "NextToken", "NextToken", "MaxResults");
