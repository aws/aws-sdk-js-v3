// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import { CodeCommitClient } from "../CodeCommitClient";
import {
  GetDifferencesCommand,
  GetDifferencesCommandInput,
  GetDifferencesCommandOutput,
} from "../commands/GetDifferencesCommand";
import { CodeCommitPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateGetDifferences: (
  config: CodeCommitPaginationConfiguration,
  input: GetDifferencesCommandInput,
  ...rest: any[]
) => Paginator<GetDifferencesCommandOutput> = createPaginator<
  CodeCommitPaginationConfiguration,
  GetDifferencesCommandInput,
  GetDifferencesCommandOutput
>(CodeCommitClient, GetDifferencesCommand, "NextToken", "NextToken", "MaxResults");
