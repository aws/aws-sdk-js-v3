// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  GetDataLakeSourcesCommand,
  GetDataLakeSourcesCommandInput,
  GetDataLakeSourcesCommandOutput,
} from "../commands/GetDataLakeSourcesCommand";
import { SecurityLakeClient } from "../SecurityLakeClient";
import { SecurityLakePaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateGetDataLakeSources: (
  config: SecurityLakePaginationConfiguration,
  input: GetDataLakeSourcesCommandInput,
  ...rest: any[]
) => Paginator<GetDataLakeSourcesCommandOutput> = createPaginator<
  SecurityLakePaginationConfiguration,
  GetDataLakeSourcesCommandInput,
  GetDataLakeSourcesCommandOutput
>(SecurityLakeClient, GetDataLakeSourcesCommand, "nextToken", "nextToken", "maxResults");
