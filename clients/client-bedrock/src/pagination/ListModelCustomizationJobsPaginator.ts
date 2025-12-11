// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import { BedrockClient } from "../BedrockClient";
import {
  ListModelCustomizationJobsCommand,
  ListModelCustomizationJobsCommandInput,
  ListModelCustomizationJobsCommandOutput,
} from "../commands/ListModelCustomizationJobsCommand";
import { BedrockPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListModelCustomizationJobs: (
  config: BedrockPaginationConfiguration,
  input: ListModelCustomizationJobsCommandInput,
  ...rest: any[]
) => Paginator<ListModelCustomizationJobsCommandOutput> = createPaginator<
  BedrockPaginationConfiguration,
  ListModelCustomizationJobsCommandInput,
  ListModelCustomizationJobsCommandOutput
>(BedrockClient, ListModelCustomizationJobsCommand, "nextToken", "nextToken", "maxResults");
