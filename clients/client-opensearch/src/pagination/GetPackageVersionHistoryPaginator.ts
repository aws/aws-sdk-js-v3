// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  GetPackageVersionHistoryCommand,
  GetPackageVersionHistoryCommandInput,
  GetPackageVersionHistoryCommandOutput,
} from "../commands/GetPackageVersionHistoryCommand";
import { OpenSearchClient } from "../OpenSearchClient";
import { OpenSearchPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateGetPackageVersionHistory: (
  config: OpenSearchPaginationConfiguration,
  input: GetPackageVersionHistoryCommandInput,
  ...rest: any[]
) => Paginator<GetPackageVersionHistoryCommandOutput> = createPaginator<
  OpenSearchPaginationConfiguration,
  GetPackageVersionHistoryCommandInput,
  GetPackageVersionHistoryCommandOutput
>(OpenSearchClient, GetPackageVersionHistoryCommand, "NextToken", "NextToken", "MaxResults");
