// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListThreatModelsCommand,
  ListThreatModelsCommandInput,
  ListThreatModelsCommandOutput,
} from "../commands/ListThreatModelsCommand";
import { SecurityAgentClient } from "../SecurityAgentClient";
import type { SecurityAgentPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListThreatModels: (
  config: SecurityAgentPaginationConfiguration,
  input: ListThreatModelsCommandInput,
  ...rest: any[]
) => Paginator<ListThreatModelsCommandOutput> = createPaginator<
  SecurityAgentPaginationConfiguration,
  ListThreatModelsCommandInput,
  ListThreatModelsCommandOutput
>(SecurityAgentClient, ListThreatModelsCommand, "nextToken", "nextToken", "maxResults");
