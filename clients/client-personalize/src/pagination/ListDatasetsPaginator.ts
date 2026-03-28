// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListDatasetsCommand,
  ListDatasetsCommandInput,
  ListDatasetsCommandOutput,
} from "../commands/ListDatasetsCommand";
import { PersonalizeClient } from "../PersonalizeClient";
import type { PersonalizePaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListDatasets: (
  config: PersonalizePaginationConfiguration,
  input: ListDatasetsCommandInput,
  ...rest: any[]
) => Paginator<ListDatasetsCommandOutput> = createPaginator<
  PersonalizePaginationConfiguration,
  ListDatasetsCommandInput,
  ListDatasetsCommandOutput
>(PersonalizeClient, ListDatasetsCommand, "nextToken", "nextToken", "maxResults");
