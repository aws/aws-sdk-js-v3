// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListRoleTagsCommand,
  ListRoleTagsCommandInput,
  ListRoleTagsCommandOutput,
} from "../commands/ListRoleTagsCommand";
import { IAMClient } from "../IAMClient";
import { IAMPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListRoleTags: (
  config: IAMPaginationConfiguration,
  input: ListRoleTagsCommandInput,
  ...rest: any[]
) => Paginator<ListRoleTagsCommandOutput> = createPaginator<
  IAMPaginationConfiguration,
  ListRoleTagsCommandInput,
  ListRoleTagsCommandOutput
>(IAMClient, ListRoleTagsCommand, "Marker", "Marker", "MaxItems");
