// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListPackageImportJobsCommand,
  ListPackageImportJobsCommandInput,
  ListPackageImportJobsCommandOutput,
} from "../commands/ListPackageImportJobsCommand";
import { PanoramaClient } from "../PanoramaClient";
import { PanoramaPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListPackageImportJobs: (
  config: PanoramaPaginationConfiguration,
  input: ListPackageImportJobsCommandInput,
  ...rest: any[]
) => Paginator<ListPackageImportJobsCommandOutput> = createPaginator<
  PanoramaPaginationConfiguration,
  ListPackageImportJobsCommandInput,
  ListPackageImportJobsCommandOutput
>(PanoramaClient, ListPackageImportJobsCommand, "NextToken", "NextToken", "MaxResults");
