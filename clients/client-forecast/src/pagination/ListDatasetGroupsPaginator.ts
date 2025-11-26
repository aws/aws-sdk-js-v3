// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListDatasetGroupsCommand,
  ListDatasetGroupsCommandInput,
  ListDatasetGroupsCommandOutput,
} from "../commands/ListDatasetGroupsCommand";
import { ForecastClient } from "../ForecastClient";
import { ForecastPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListDatasetGroups: (
  config: ForecastPaginationConfiguration,
  input: ListDatasetGroupsCommandInput,
  ...rest: any[]
) => Paginator<ListDatasetGroupsCommandOutput> = createPaginator<
  ForecastPaginationConfiguration,
  ListDatasetGroupsCommandInput,
  ListDatasetGroupsCommandOutput
>(ForecastClient, ListDatasetGroupsCommand, "NextToken", "NextToken", "MaxResults");
