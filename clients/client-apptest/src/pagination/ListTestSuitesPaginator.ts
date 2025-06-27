// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import { Paginator } from "@smithy/types";

import { AppTestClient } from "../AppTestClient";
import {
  ListTestSuitesCommand,
  ListTestSuitesCommandInput,
  ListTestSuitesCommandOutput,
} from "../commands/ListTestSuitesCommand";
import { AppTestPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListTestSuites: (
  config: AppTestPaginationConfiguration,
  input: ListTestSuitesCommandInput,
  ...rest: any[]
) => Paginator<ListTestSuitesCommandOutput> = createPaginator<
  AppTestPaginationConfiguration,
  ListTestSuitesCommandInput,
  ListTestSuitesCommandOutput
>(AppTestClient, ListTestSuitesCommand, "nextToken", "nextToken", "maxResults");
