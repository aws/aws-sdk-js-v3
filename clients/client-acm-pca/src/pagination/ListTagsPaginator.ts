// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import { ACMPCAClient } from "../ACMPCAClient";
import { ListTagsCommand, ListTagsCommandInput, ListTagsCommandOutput } from "../commands/ListTagsCommand";
import { ACMPCAPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListTags: (
  config: ACMPCAPaginationConfiguration,
  input: ListTagsCommandInput,
  ...rest: any[]
) => Paginator<ListTagsCommandOutput> = createPaginator<
  ACMPCAPaginationConfiguration,
  ListTagsCommandInput,
  ListTagsCommandOutput
>(ACMPCAClient, ListTagsCommand, "NextToken", "NextToken", "MaxResults");
