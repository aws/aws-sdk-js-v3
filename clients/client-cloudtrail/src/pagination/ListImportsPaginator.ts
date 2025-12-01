// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import { CloudTrailClient } from "../CloudTrailClient";
import { ListImportsCommand, ListImportsCommandInput, ListImportsCommandOutput } from "../commands/ListImportsCommand";
import { CloudTrailPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListImports: (
  config: CloudTrailPaginationConfiguration,
  input: ListImportsCommandInput,
  ...rest: any[]
) => Paginator<ListImportsCommandOutput> = createPaginator<
  CloudTrailPaginationConfiguration,
  ListImportsCommandInput,
  ListImportsCommandOutput
>(CloudTrailClient, ListImportsCommand, "NextToken", "NextToken", "MaxResults");
