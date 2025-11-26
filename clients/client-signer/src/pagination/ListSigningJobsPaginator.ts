// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListSigningJobsCommand,
  ListSigningJobsCommandInput,
  ListSigningJobsCommandOutput,
} from "../commands/ListSigningJobsCommand";
import { SignerClient } from "../SignerClient";
import { SignerPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListSigningJobs: (
  config: SignerPaginationConfiguration,
  input: ListSigningJobsCommandInput,
  ...rest: any[]
) => Paginator<ListSigningJobsCommandOutput> = createPaginator<
  SignerPaginationConfiguration,
  ListSigningJobsCommandInput,
  ListSigningJobsCommandOutput
>(SignerClient, ListSigningJobsCommand, "nextToken", "nextToken", "maxResults");
