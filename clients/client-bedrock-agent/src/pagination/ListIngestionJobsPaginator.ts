// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import { BedrockAgentClient } from "../BedrockAgentClient";
import {
  ListIngestionJobsCommand,
  ListIngestionJobsCommandInput,
  ListIngestionJobsCommandOutput,
} from "../commands/ListIngestionJobsCommand";
import { BedrockAgentPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListIngestionJobs: (
  config: BedrockAgentPaginationConfiguration,
  input: ListIngestionJobsCommandInput,
  ...rest: any[]
) => Paginator<ListIngestionJobsCommandOutput> = createPaginator<
  BedrockAgentPaginationConfiguration,
  ListIngestionJobsCommandInput,
  ListIngestionJobsCommandOutput
>(BedrockAgentClient, ListIngestionJobsCommand, "nextToken", "nextToken", "maxResults");
