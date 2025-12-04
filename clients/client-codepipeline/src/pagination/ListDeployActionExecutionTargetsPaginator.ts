// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import { CodePipelineClient } from "../CodePipelineClient";
import {
  ListDeployActionExecutionTargetsCommand,
  ListDeployActionExecutionTargetsCommandInput,
  ListDeployActionExecutionTargetsCommandOutput,
} from "../commands/ListDeployActionExecutionTargetsCommand";
import { CodePipelinePaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListDeployActionExecutionTargets: (
  config: CodePipelinePaginationConfiguration,
  input: ListDeployActionExecutionTargetsCommandInput,
  ...rest: any[]
) => Paginator<ListDeployActionExecutionTargetsCommandOutput> = createPaginator<
  CodePipelinePaginationConfiguration,
  ListDeployActionExecutionTargetsCommandInput,
  ListDeployActionExecutionTargetsCommandOutput
>(CodePipelineClient, ListDeployActionExecutionTargetsCommand, "nextToken", "nextToken", "maxResults");
