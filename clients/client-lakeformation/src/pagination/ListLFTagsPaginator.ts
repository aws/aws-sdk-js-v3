// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import { ListLFTagsCommand, ListLFTagsCommandInput, ListLFTagsCommandOutput } from "../commands/ListLFTagsCommand";
import { LakeFormationClient } from "../LakeFormationClient";
import { LakeFormationPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListLFTags: (
  config: LakeFormationPaginationConfiguration,
  input: ListLFTagsCommandInput,
  ...rest: any[]
) => Paginator<ListLFTagsCommandOutput> = createPaginator<
  LakeFormationPaginationConfiguration,
  ListLFTagsCommandInput,
  ListLFTagsCommandOutput
>(LakeFormationClient, ListLFTagsCommand, "NextToken", "NextToken", "MaxResults");
