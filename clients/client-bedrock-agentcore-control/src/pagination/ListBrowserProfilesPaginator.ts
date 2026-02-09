// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import { BedrockAgentCoreControlClient } from "../BedrockAgentCoreControlClient";
import {
  ListBrowserProfilesCommand,
  ListBrowserProfilesCommandInput,
  ListBrowserProfilesCommandOutput,
} from "../commands/ListBrowserProfilesCommand";
import { BedrockAgentCoreControlPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListBrowserProfiles: (
  config: BedrockAgentCoreControlPaginationConfiguration,
  input: ListBrowserProfilesCommandInput,
  ...rest: any[]
) => Paginator<ListBrowserProfilesCommandOutput> = createPaginator<
  BedrockAgentCoreControlPaginationConfiguration,
  ListBrowserProfilesCommandInput,
  ListBrowserProfilesCommandOutput
>(BedrockAgentCoreControlClient, ListBrowserProfilesCommand, "nextToken", "nextToken", "maxResults");
