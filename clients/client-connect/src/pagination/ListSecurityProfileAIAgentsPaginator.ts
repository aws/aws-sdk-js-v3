// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListSecurityProfileAIAgentsCommand,
  ListSecurityProfileAIAgentsCommandInput,
  ListSecurityProfileAIAgentsCommandOutput,
} from "../commands/ListSecurityProfileAIAgentsCommand";
import { ConnectClient } from "../ConnectClient";
import type { ConnectPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListSecurityProfileAIAgents: (
  config: ConnectPaginationConfiguration,
  input: ListSecurityProfileAIAgentsCommandInput,
  ...rest: any[]
) => Paginator<ListSecurityProfileAIAgentsCommandOutput> = createPaginator<
  ConnectPaginationConfiguration,
  ListSecurityProfileAIAgentsCommandInput,
  ListSecurityProfileAIAgentsCommandOutput
>(ConnectClient, ListSecurityProfileAIAgentsCommand, "NextToken", "NextToken", "MaxResults");
