// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListPolicyTagsCommand,
  ListPolicyTagsCommandInput,
  ListPolicyTagsCommandOutput,
} from "../commands/ListPolicyTagsCommand";
import { IAMClient } from "../IAMClient";
import { IAMPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListPolicyTags: (
  config: IAMPaginationConfiguration,
  input: ListPolicyTagsCommandInput,
  ...rest: any[]
) => Paginator<ListPolicyTagsCommandOutput> = createPaginator<
  IAMPaginationConfiguration,
  ListPolicyTagsCommandInput,
  ListPolicyTagsCommandOutput
>(IAMClient, ListPolicyTagsCommand, "Marker", "Marker", "MaxItems");
