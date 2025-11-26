// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import { CloudTrailClient } from "../CloudTrailClient";
import { ListTagsCommand, ListTagsCommandInput, ListTagsCommandOutput } from "../commands/ListTagsCommand";
import { CloudTrailPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListTags: (
  config: CloudTrailPaginationConfiguration,
  input: ListTagsCommandInput,
  ...rest: any[]
) => Paginator<ListTagsCommandOutput> = createPaginator<
  CloudTrailPaginationConfiguration,
  ListTagsCommandInput,
  ListTagsCommandOutput
>(CloudTrailClient, ListTagsCommand, "NextToken", "NextToken", "");
