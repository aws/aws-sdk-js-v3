// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListReadSetActivationJobsCommand,
  ListReadSetActivationJobsCommandInput,
  ListReadSetActivationJobsCommandOutput,
} from "../commands/ListReadSetActivationJobsCommand";
import { OmicsClient } from "../OmicsClient";
import { OmicsPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListReadSetActivationJobs: (
  config: OmicsPaginationConfiguration,
  input: ListReadSetActivationJobsCommandInput,
  ...rest: any[]
) => Paginator<ListReadSetActivationJobsCommandOutput> = createPaginator<
  OmicsPaginationConfiguration,
  ListReadSetActivationJobsCommandInput,
  ListReadSetActivationJobsCommandOutput
>(OmicsClient, ListReadSetActivationJobsCommand, "nextToken", "nextToken", "maxResults");
