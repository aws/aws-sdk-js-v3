// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListSecurityRequirementPacksCommand,
  ListSecurityRequirementPacksCommandInput,
  ListSecurityRequirementPacksCommandOutput,
} from "../commands/ListSecurityRequirementPacksCommand";
import { SecurityAgentClient } from "../SecurityAgentClient";
import type { SecurityAgentPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListSecurityRequirementPacks: (
  config: SecurityAgentPaginationConfiguration,
  input: ListSecurityRequirementPacksCommandInput,
  ...rest: any[]
) => Paginator<ListSecurityRequirementPacksCommandOutput> = createPaginator<
  SecurityAgentPaginationConfiguration,
  ListSecurityRequirementPacksCommandInput,
  ListSecurityRequirementPacksCommandOutput
>(SecurityAgentClient, ListSecurityRequirementPacksCommand, "nextToken", "nextToken", "maxResults");
