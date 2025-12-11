// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListDocumentClassificationJobsCommand,
  ListDocumentClassificationJobsCommandInput,
  ListDocumentClassificationJobsCommandOutput,
} from "../commands/ListDocumentClassificationJobsCommand";
import { ComprehendClient } from "../ComprehendClient";
import { ComprehendPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListDocumentClassificationJobs: (
  config: ComprehendPaginationConfiguration,
  input: ListDocumentClassificationJobsCommandInput,
  ...rest: any[]
) => Paginator<ListDocumentClassificationJobsCommandOutput> = createPaginator<
  ComprehendPaginationConfiguration,
  ListDocumentClassificationJobsCommandInput,
  ListDocumentClassificationJobsCommandOutput
>(ComprehendClient, ListDocumentClassificationJobsCommand, "NextToken", "NextToken", "MaxResults");
