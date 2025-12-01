// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListSolutionVersionsCommand,
  ListSolutionVersionsCommandInput,
  ListSolutionVersionsCommandOutput,
} from "../commands/ListSolutionVersionsCommand";
import { PersonalizeClient } from "../PersonalizeClient";
import { PersonalizePaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListSolutionVersions: (
  config: PersonalizePaginationConfiguration,
  input: ListSolutionVersionsCommandInput,
  ...rest: any[]
) => Paginator<ListSolutionVersionsCommandOutput> = createPaginator<
  PersonalizePaginationConfiguration,
  ListSolutionVersionsCommandInput,
  ListSolutionVersionsCommandOutput
>(PersonalizeClient, ListSolutionVersionsCommand, "nextToken", "nextToken", "maxResults");
