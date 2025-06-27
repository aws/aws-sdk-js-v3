// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import { Paginator } from "@smithy/types";

import { AppTestClient } from "../AppTestClient";
import {
  ListTestCasesCommand,
  ListTestCasesCommandInput,
  ListTestCasesCommandOutput,
} from "../commands/ListTestCasesCommand";
import { AppTestPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListTestCases: (
  config: AppTestPaginationConfiguration,
  input: ListTestCasesCommandInput,
  ...rest: any[]
) => Paginator<ListTestCasesCommandOutput> = createPaginator<
  AppTestPaginationConfiguration,
  ListTestCasesCommandInput,
  ListTestCasesCommandOutput
>(AppTestClient, ListTestCasesCommand, "nextToken", "nextToken", "maxResults");
