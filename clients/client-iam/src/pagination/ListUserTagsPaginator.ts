// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListUserTagsCommand,
  ListUserTagsCommandInput,
  ListUserTagsCommandOutput,
} from "../commands/ListUserTagsCommand";
import { IAMClient } from "../IAMClient";
import { IAMPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListUserTags: (
  config: IAMPaginationConfiguration,
  input: ListUserTagsCommandInput,
  ...rest: any[]
) => Paginator<ListUserTagsCommandOutput> = createPaginator<
  IAMPaginationConfiguration,
  ListUserTagsCommandInput,
  ListUserTagsCommandOutput
>(IAMClient, ListUserTagsCommand, "Marker", "Marker", "MaxItems");
