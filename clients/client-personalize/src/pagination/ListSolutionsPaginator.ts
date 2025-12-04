// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListSolutionsCommand,
  ListSolutionsCommandInput,
  ListSolutionsCommandOutput,
} from "../commands/ListSolutionsCommand";
import { PersonalizeClient } from "../PersonalizeClient";
import { PersonalizePaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListSolutions: (
  config: PersonalizePaginationConfiguration,
  input: ListSolutionsCommandInput,
  ...rest: any[]
) => Paginator<ListSolutionsCommandOutput> = createPaginator<
  PersonalizePaginationConfiguration,
  ListSolutionsCommandInput,
  ListSolutionsCommandOutput
>(PersonalizeClient, ListSolutionsCommand, "nextToken", "nextToken", "maxResults");
