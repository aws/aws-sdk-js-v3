// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  GetPackageVersionHistoryCommand,
  GetPackageVersionHistoryCommandInput,
  GetPackageVersionHistoryCommandOutput,
} from "../commands/GetPackageVersionHistoryCommand";
import { ElasticsearchServiceClient } from "../ElasticsearchServiceClient";
import { ElasticsearchServicePaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateGetPackageVersionHistory: (
  config: ElasticsearchServicePaginationConfiguration,
  input: GetPackageVersionHistoryCommandInput,
  ...rest: any[]
) => Paginator<GetPackageVersionHistoryCommandOutput> = createPaginator<
  ElasticsearchServicePaginationConfiguration,
  GetPackageVersionHistoryCommandInput,
  GetPackageVersionHistoryCommandOutput
>(ElasticsearchServiceClient, GetPackageVersionHistoryCommand, "NextToken", "NextToken", "MaxResults");
