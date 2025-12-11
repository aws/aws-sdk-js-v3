// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListNodeFromTemplateJobsCommand,
  ListNodeFromTemplateJobsCommandInput,
  ListNodeFromTemplateJobsCommandOutput,
} from "../commands/ListNodeFromTemplateJobsCommand";
import { PanoramaClient } from "../PanoramaClient";
import { PanoramaPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListNodeFromTemplateJobs: (
  config: PanoramaPaginationConfiguration,
  input: ListNodeFromTemplateJobsCommandInput,
  ...rest: any[]
) => Paginator<ListNodeFromTemplateJobsCommandOutput> = createPaginator<
  PanoramaPaginationConfiguration,
  ListNodeFromTemplateJobsCommandInput,
  ListNodeFromTemplateJobsCommandOutput
>(PanoramaClient, ListNodeFromTemplateJobsCommand, "NextToken", "NextToken", "MaxResults");
