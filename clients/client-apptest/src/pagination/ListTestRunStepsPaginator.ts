// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import { Paginator } from "@smithy/types";

import { AppTestClient } from "../AppTestClient";
import {
  ListTestRunStepsCommand,
  ListTestRunStepsCommandInput,
  ListTestRunStepsCommandOutput,
} from "../commands/ListTestRunStepsCommand";
import { AppTestPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListTestRunSteps: (
  config: AppTestPaginationConfiguration,
  input: ListTestRunStepsCommandInput,
  ...rest: any[]
) => Paginator<ListTestRunStepsCommandOutput> = createPaginator<
  AppTestPaginationConfiguration,
  ListTestRunStepsCommandInput,
  ListTestRunStepsCommandOutput
>(AppTestClient, ListTestRunStepsCommand, "nextToken", "nextToken", "maxResults");
