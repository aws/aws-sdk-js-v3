// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  SearchTablesByLFTagsCommand,
  SearchTablesByLFTagsCommandInput,
  SearchTablesByLFTagsCommandOutput,
} from "../commands/SearchTablesByLFTagsCommand";
import { LakeFormationClient } from "../LakeFormationClient";
import { LakeFormationPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateSearchTablesByLFTags: (
  config: LakeFormationPaginationConfiguration,
  input: SearchTablesByLFTagsCommandInput,
  ...rest: any[]
) => Paginator<SearchTablesByLFTagsCommandOutput> = createPaginator<
  LakeFormationPaginationConfiguration,
  SearchTablesByLFTagsCommandInput,
  SearchTablesByLFTagsCommandOutput
>(LakeFormationClient, SearchTablesByLFTagsCommand, "NextToken", "NextToken", "MaxResults");
