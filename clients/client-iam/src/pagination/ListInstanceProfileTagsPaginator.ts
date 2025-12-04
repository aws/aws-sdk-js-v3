// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListInstanceProfileTagsCommand,
  ListInstanceProfileTagsCommandInput,
  ListInstanceProfileTagsCommandOutput,
} from "../commands/ListInstanceProfileTagsCommand";
import { IAMClient } from "../IAMClient";
import { IAMPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListInstanceProfileTags: (
  config: IAMPaginationConfiguration,
  input: ListInstanceProfileTagsCommandInput,
  ...rest: any[]
) => Paginator<ListInstanceProfileTagsCommandOutput> = createPaginator<
  IAMPaginationConfiguration,
  ListInstanceProfileTagsCommandInput,
  ListInstanceProfileTagsCommandOutput
>(IAMClient, ListInstanceProfileTagsCommand, "Marker", "Marker", "MaxItems");
