// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import { CloudHSMV2Client } from "../CloudHSMV2Client";
import { ListTagsCommand, ListTagsCommandInput, ListTagsCommandOutput } from "../commands/ListTagsCommand";
import { CloudHSMV2PaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListTags: (
  config: CloudHSMV2PaginationConfiguration,
  input: ListTagsCommandInput,
  ...rest: any[]
) => Paginator<ListTagsCommandOutput> = createPaginator<
  CloudHSMV2PaginationConfiguration,
  ListTagsCommandInput,
  ListTagsCommandOutput
>(CloudHSMV2Client, ListTagsCommand, "NextToken", "NextToken", "MaxResults");
