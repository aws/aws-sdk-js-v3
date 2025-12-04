// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListClassificationJobsCommand,
  ListClassificationJobsCommandInput,
  ListClassificationJobsCommandOutput,
} from "../commands/ListClassificationJobsCommand";
import { Macie2Client } from "../Macie2Client";
import { Macie2PaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListClassificationJobs: (
  config: Macie2PaginationConfiguration,
  input: ListClassificationJobsCommandInput,
  ...rest: any[]
) => Paginator<ListClassificationJobsCommandOutput> = createPaginator<
  Macie2PaginationConfiguration,
  ListClassificationJobsCommandInput,
  ListClassificationJobsCommandOutput
>(Macie2Client, ListClassificationJobsCommand, "nextToken", "nextToken", "maxResults");
