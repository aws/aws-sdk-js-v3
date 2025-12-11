// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  SearchDatabasesByLFTagsCommand,
  SearchDatabasesByLFTagsCommandInput,
  SearchDatabasesByLFTagsCommandOutput,
} from "../commands/SearchDatabasesByLFTagsCommand";
import { LakeFormationClient } from "../LakeFormationClient";
import { LakeFormationPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateSearchDatabasesByLFTags: (
  config: LakeFormationPaginationConfiguration,
  input: SearchDatabasesByLFTagsCommandInput,
  ...rest: any[]
) => Paginator<SearchDatabasesByLFTagsCommandOutput> = createPaginator<
  LakeFormationPaginationConfiguration,
  SearchDatabasesByLFTagsCommandInput,
  SearchDatabasesByLFTagsCommandOutput
>(LakeFormationClient, SearchDatabasesByLFTagsCommand, "NextToken", "NextToken", "MaxResults");
