// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListAgentProfilesCommand,
  ListAgentProfilesCommandInput,
  ListAgentProfilesCommandOutput,
} from "../commands/ListAgentProfilesCommand";
import { WellArchitectedClient } from "../WellArchitectedClient";
import type { WellArchitectedPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListAgentProfiles: (
  config: WellArchitectedPaginationConfiguration,
  input: ListAgentProfilesCommandInput,
  ...rest: any[]
) => Paginator<ListAgentProfilesCommandOutput> = createPaginator<
  WellArchitectedPaginationConfiguration,
  ListAgentProfilesCommandInput,
  ListAgentProfilesCommandOutput
>(WellArchitectedClient, ListAgentProfilesCommand, "nextToken", "nextToken", "maxResults");
