// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import { Paginator } from "@smithy/types";

import { AppTestClient } from "../AppTestClient";
import {
  ListTestConfigurationsCommand,
  ListTestConfigurationsCommandInput,
  ListTestConfigurationsCommandOutput,
} from "../commands/ListTestConfigurationsCommand";
import { AppTestPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListTestConfigurations: (
  config: AppTestPaginationConfiguration,
  input: ListTestConfigurationsCommandInput,
  ...rest: any[]
) => Paginator<ListTestConfigurationsCommandOutput> = createPaginator<
  AppTestPaginationConfiguration,
  ListTestConfigurationsCommandInput,
  ListTestConfigurationsCommandOutput
>(AppTestClient, ListTestConfigurationsCommand, "nextToken", "nextToken", "maxResults");
