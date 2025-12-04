// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import { ChatbotClient } from "../ChatbotClient";
import {
  ListMicrosoftTeamsUserIdentitiesCommand,
  ListMicrosoftTeamsUserIdentitiesCommandInput,
  ListMicrosoftTeamsUserIdentitiesCommandOutput,
} from "../commands/ListMicrosoftTeamsUserIdentitiesCommand";
import { ChatbotPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListMicrosoftTeamsUserIdentities: (
  config: ChatbotPaginationConfiguration,
  input: ListMicrosoftTeamsUserIdentitiesCommandInput,
  ...rest: any[]
) => Paginator<ListMicrosoftTeamsUserIdentitiesCommandOutput> = createPaginator<
  ChatbotPaginationConfiguration,
  ListMicrosoftTeamsUserIdentitiesCommandInput,
  ListMicrosoftTeamsUserIdentitiesCommandOutput
>(ChatbotClient, ListMicrosoftTeamsUserIdentitiesCommand, "NextToken", "NextToken", "MaxResults");
