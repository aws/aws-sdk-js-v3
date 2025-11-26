// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import { ChatbotClient } from "../ChatbotClient";
import {
  ListMicrosoftTeamsConfiguredTeamsCommand,
  ListMicrosoftTeamsConfiguredTeamsCommandInput,
  ListMicrosoftTeamsConfiguredTeamsCommandOutput,
} from "../commands/ListMicrosoftTeamsConfiguredTeamsCommand";
import { ChatbotPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListMicrosoftTeamsConfiguredTeams: (
  config: ChatbotPaginationConfiguration,
  input: ListMicrosoftTeamsConfiguredTeamsCommandInput,
  ...rest: any[]
) => Paginator<ListMicrosoftTeamsConfiguredTeamsCommandOutput> = createPaginator<
  ChatbotPaginationConfiguration,
  ListMicrosoftTeamsConfiguredTeamsCommandInput,
  ListMicrosoftTeamsConfiguredTeamsCommandOutput
>(ChatbotClient, ListMicrosoftTeamsConfiguredTeamsCommand, "NextToken", "NextToken", "MaxResults");
