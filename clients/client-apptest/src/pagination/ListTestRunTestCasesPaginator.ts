// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import { Paginator } from "@smithy/types";

import { AppTestClient } from "../AppTestClient";
import {
  ListTestRunTestCasesCommand,
  ListTestRunTestCasesCommandInput,
  ListTestRunTestCasesCommandOutput,
} from "../commands/ListTestRunTestCasesCommand";
import { AppTestPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListTestRunTestCases: (
  config: AppTestPaginationConfiguration,
  input: ListTestRunTestCasesCommandInput,
  ...rest: any[]
) => Paginator<ListTestRunTestCasesCommandOutput> = createPaginator<
  AppTestPaginationConfiguration,
  ListTestRunTestCasesCommandInput,
  ListTestRunTestCasesCommandOutput
>(AppTestClient, ListTestRunTestCasesCommand, "nextToken", "nextToken", "maxResults");
