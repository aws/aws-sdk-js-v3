// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import { Paginator } from "@smithy/types";

import { BedrockAgentCoreClient } from "../BedrockAgentCoreClient";
import {
  ListMemoryExtractionJobsCommand,
  ListMemoryExtractionJobsCommandInput,
  ListMemoryExtractionJobsCommandOutput,
} from "../commands/ListMemoryExtractionJobsCommand";
import { BedrockAgentCorePaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListMemoryExtractionJobs: (
  config: BedrockAgentCorePaginationConfiguration,
  input: ListMemoryExtractionJobsCommandInput,
  ...rest: any[]
) => Paginator<ListMemoryExtractionJobsCommandOutput> = createPaginator<
  BedrockAgentCorePaginationConfiguration,
  ListMemoryExtractionJobsCommandInput,
  ListMemoryExtractionJobsCommandOutput
>(BedrockAgentCoreClient, ListMemoryExtractionJobsCommand, "nextToken", "nextToken", "maxResults");
