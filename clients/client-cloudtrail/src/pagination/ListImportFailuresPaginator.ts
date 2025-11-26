// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import { CloudTrailClient } from "../CloudTrailClient";
import {
  ListImportFailuresCommand,
  ListImportFailuresCommandInput,
  ListImportFailuresCommandOutput,
} from "../commands/ListImportFailuresCommand";
import { CloudTrailPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListImportFailures: (
  config: CloudTrailPaginationConfiguration,
  input: ListImportFailuresCommandInput,
  ...rest: any[]
) => Paginator<ListImportFailuresCommandOutput> = createPaginator<
  CloudTrailPaginationConfiguration,
  ListImportFailuresCommandInput,
  ListImportFailuresCommandOutput
>(CloudTrailClient, ListImportFailuresCommand, "NextToken", "NextToken", "MaxResults");
