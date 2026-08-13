// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import { CodeCommitClient } from "../CodeCommitClient";
import {
  GetBlobDifferencesCommand,
  GetBlobDifferencesCommandInput,
  GetBlobDifferencesCommandOutput,
} from "../commands/GetBlobDifferencesCommand";
import type { CodeCommitPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateGetBlobDifferences: (
  config: CodeCommitPaginationConfiguration,
  input: GetBlobDifferencesCommandInput,
  ...rest: any[]
) => Paginator<GetBlobDifferencesCommandOutput> = createPaginator<
  CodeCommitPaginationConfiguration,
  GetBlobDifferencesCommandInput,
  GetBlobDifferencesCommandOutput
>(CodeCommitClient, GetBlobDifferencesCommand, "NextToken", "NextToken", "MaxResults");
