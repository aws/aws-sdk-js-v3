// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListDataSourcesCommand,
  ListDataSourcesCommandInput,
  ListDataSourcesCommandOutput,
} from "../commands/ListDataSourcesCommand";
import { KendraClient } from "../KendraClient";
import { KendraPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListDataSources: (
  config: KendraPaginationConfiguration,
  input: ListDataSourcesCommandInput,
  ...rest: any[]
) => Paginator<ListDataSourcesCommandOutput> = createPaginator<
  KendraPaginationConfiguration,
  ListDataSourcesCommandInput,
  ListDataSourcesCommandOutput
>(KendraClient, ListDataSourcesCommand, "NextToken", "NextToken", "MaxResults");
