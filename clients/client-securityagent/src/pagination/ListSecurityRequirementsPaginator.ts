// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListSecurityRequirementsCommand,
  ListSecurityRequirementsCommandInput,
  ListSecurityRequirementsCommandOutput,
} from "../commands/ListSecurityRequirementsCommand";
import { SecurityAgentClient } from "../SecurityAgentClient";
import type { SecurityAgentPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListSecurityRequirements: (
  config: SecurityAgentPaginationConfiguration,
  input: ListSecurityRequirementsCommandInput,
  ...rest: any[]
) => Paginator<ListSecurityRequirementsCommandOutput> = createPaginator<
  SecurityAgentPaginationConfiguration,
  ListSecurityRequirementsCommandInput,
  ListSecurityRequirementsCommandOutput
>(SecurityAgentClient, ListSecurityRequirementsCommand, "nextToken", "nextToken", "maxResults");
