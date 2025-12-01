// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import { AmplifyClient } from "../AmplifyClient";
import { ListJobsCommand, ListJobsCommandInput, ListJobsCommandOutput } from "../commands/ListJobsCommand";
import { AmplifyPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListJobs: (
  config: AmplifyPaginationConfiguration,
  input: ListJobsCommandInput,
  ...rest: any[]
) => Paginator<ListJobsCommandOutput> = createPaginator<
  AmplifyPaginationConfiguration,
  ListJobsCommandInput,
  ListJobsCommandOutput
>(AmplifyClient, ListJobsCommand, "nextToken", "nextToken", "maxResults");
