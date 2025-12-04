// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListDatasetGroupsCommand,
  ListDatasetGroupsCommandInput,
  ListDatasetGroupsCommandOutput,
} from "../commands/ListDatasetGroupsCommand";
import { PersonalizeClient } from "../PersonalizeClient";
import { PersonalizePaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListDatasetGroups: (
  config: PersonalizePaginationConfiguration,
  input: ListDatasetGroupsCommandInput,
  ...rest: any[]
) => Paginator<ListDatasetGroupsCommandOutput> = createPaginator<
  PersonalizePaginationConfiguration,
  ListDatasetGroupsCommandInput,
  ListDatasetGroupsCommandOutput
>(PersonalizeClient, ListDatasetGroupsCommand, "nextToken", "nextToken", "maxResults");
