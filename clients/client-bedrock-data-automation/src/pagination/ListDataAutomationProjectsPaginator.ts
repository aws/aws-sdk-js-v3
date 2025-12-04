// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import { BedrockDataAutomationClient } from "../BedrockDataAutomationClient";
import {
  ListDataAutomationProjectsCommand,
  ListDataAutomationProjectsCommandInput,
  ListDataAutomationProjectsCommandOutput,
} from "../commands/ListDataAutomationProjectsCommand";
import { BedrockDataAutomationPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListDataAutomationProjects: (
  config: BedrockDataAutomationPaginationConfiguration,
  input: ListDataAutomationProjectsCommandInput,
  ...rest: any[]
) => Paginator<ListDataAutomationProjectsCommandOutput> = createPaginator<
  BedrockDataAutomationPaginationConfiguration,
  ListDataAutomationProjectsCommandInput,
  ListDataAutomationProjectsCommandOutput
>(BedrockDataAutomationClient, ListDataAutomationProjectsCommand, "nextToken", "nextToken", "maxResults");
