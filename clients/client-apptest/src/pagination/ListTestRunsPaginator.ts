// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import { Paginator } from "@smithy/types";

import { AppTestClient } from "../AppTestClient";
import {
  ListTestRunsCommand,
  ListTestRunsCommandInput,
  ListTestRunsCommandOutput,
} from "../commands/ListTestRunsCommand";
import { AppTestPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListTestRuns: (
  config: AppTestPaginationConfiguration,
  input: ListTestRunsCommandInput,
  ...rest: any[]
) => Paginator<ListTestRunsCommandOutput> = createPaginator<
  AppTestPaginationConfiguration,
  ListTestRunsCommandInput,
  ListTestRunsCommandOutput
>(AppTestClient, ListTestRunsCommand, "nextToken", "nextToken", "maxResults");
