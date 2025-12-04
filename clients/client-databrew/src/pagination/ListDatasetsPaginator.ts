// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListDatasetsCommand,
  ListDatasetsCommandInput,
  ListDatasetsCommandOutput,
} from "../commands/ListDatasetsCommand";
import { DataBrewClient } from "../DataBrewClient";
import { DataBrewPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListDatasets: (
  config: DataBrewPaginationConfiguration,
  input: ListDatasetsCommandInput,
  ...rest: any[]
) => Paginator<ListDatasetsCommandOutput> = createPaginator<
  DataBrewPaginationConfiguration,
  ListDatasetsCommandInput,
  ListDatasetsCommandOutput
>(DataBrewClient, ListDatasetsCommand, "NextToken", "NextToken", "MaxResults");
