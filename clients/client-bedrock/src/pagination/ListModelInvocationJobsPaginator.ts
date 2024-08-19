// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import { Paginator } from "@smithy/types";

import { BedrockClient } from "../BedrockClient";
import {
  ListModelInvocationJobsCommand,
  ListModelInvocationJobsCommandInput,
  ListModelInvocationJobsCommandOutput,
} from "../commands/ListModelInvocationJobsCommand";
import { BedrockPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListModelInvocationJobs: (
  config: BedrockPaginationConfiguration,
  input: ListModelInvocationJobsCommandInput,
  ...rest: any[]
) => Paginator<ListModelInvocationJobsCommandOutput> = createPaginator<
  BedrockPaginationConfiguration,
  ListModelInvocationJobsCommandInput,
  ListModelInvocationJobsCommandOutput
>(BedrockClient, ListModelInvocationJobsCommand, "nextToken", "nextToken", "maxResults");
