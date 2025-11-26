// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import { CodePipelineClient } from "../CodePipelineClient";
import {
  ListActionExecutionsCommand,
  ListActionExecutionsCommandInput,
  ListActionExecutionsCommandOutput,
} from "../commands/ListActionExecutionsCommand";
import { CodePipelinePaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListActionExecutions: (
  config: CodePipelinePaginationConfiguration,
  input: ListActionExecutionsCommandInput,
  ...rest: any[]
) => Paginator<ListActionExecutionsCommandOutput> = createPaginator<
  CodePipelinePaginationConfiguration,
  ListActionExecutionsCommandInput,
  ListActionExecutionsCommandOutput
>(CodePipelineClient, ListActionExecutionsCommand, "nextToken", "nextToken", "maxResults");
