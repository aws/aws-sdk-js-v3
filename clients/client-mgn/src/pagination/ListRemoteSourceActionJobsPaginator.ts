// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListRemoteSourceActionJobsCommand,
  ListRemoteSourceActionJobsCommandInput,
  ListRemoteSourceActionJobsCommandOutput,
} from "../commands/ListRemoteSourceActionJobsCommand";
import { MgnClient } from "../MgnClient";
import type { MgnPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListRemoteSourceActionJobs: (
  config: MgnPaginationConfiguration,
  input: ListRemoteSourceActionJobsCommandInput,
  ...rest: any[]
) => Paginator<ListRemoteSourceActionJobsCommandOutput> = createPaginator<
  MgnPaginationConfiguration,
  ListRemoteSourceActionJobsCommandInput,
  ListRemoteSourceActionJobsCommandOutput
>(MgnClient, ListRemoteSourceActionJobsCommand, "nextToken", "nextToken", "maxResults");
