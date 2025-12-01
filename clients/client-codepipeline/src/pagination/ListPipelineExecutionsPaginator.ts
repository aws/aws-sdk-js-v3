// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import { CodePipelineClient } from "../CodePipelineClient";
import {
  ListPipelineExecutionsCommand,
  ListPipelineExecutionsCommandInput,
  ListPipelineExecutionsCommandOutput,
} from "../commands/ListPipelineExecutionsCommand";
import { CodePipelinePaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListPipelineExecutions: (
  config: CodePipelinePaginationConfiguration,
  input: ListPipelineExecutionsCommandInput,
  ...rest: any[]
) => Paginator<ListPipelineExecutionsCommandOutput> = createPaginator<
  CodePipelinePaginationConfiguration,
  ListPipelineExecutionsCommandInput,
  ListPipelineExecutionsCommandOutput
>(CodePipelineClient, ListPipelineExecutionsCommand, "nextToken", "nextToken", "maxResults");
