// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import { BackupClient } from "../BackupClient";
import { ListTagsCommand, ListTagsCommandInput, ListTagsCommandOutput } from "../commands/ListTagsCommand";
import { BackupPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListTags: (
  config: BackupPaginationConfiguration,
  input: ListTagsCommandInput,
  ...rest: any[]
) => Paginator<ListTagsCommandOutput> = createPaginator<
  BackupPaginationConfiguration,
  ListTagsCommandInput,
  ListTagsCommandOutput
>(BackupClient, ListTagsCommand, "NextToken", "NextToken", "MaxResults");
