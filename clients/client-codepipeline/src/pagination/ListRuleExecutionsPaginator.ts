// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import { CodePipelineClient } from "../CodePipelineClient";
import {
  ListRuleExecutionsCommand,
  ListRuleExecutionsCommandInput,
  ListRuleExecutionsCommandOutput,
} from "../commands/ListRuleExecutionsCommand";
import { CodePipelinePaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListRuleExecutions: (
  config: CodePipelinePaginationConfiguration,
  input: ListRuleExecutionsCommandInput,
  ...rest: any[]
) => Paginator<ListRuleExecutionsCommandOutput> = createPaginator<
  CodePipelinePaginationConfiguration,
  ListRuleExecutionsCommandInput,
  ListRuleExecutionsCommandOutput
>(CodePipelineClient, ListRuleExecutionsCommand, "nextToken", "nextToken", "maxResults");
