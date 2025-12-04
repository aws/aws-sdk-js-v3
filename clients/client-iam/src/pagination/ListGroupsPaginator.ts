// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import { ListGroupsCommand, ListGroupsCommandInput, ListGroupsCommandOutput } from "../commands/ListGroupsCommand";
import { IAMClient } from "../IAMClient";
import { IAMPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListGroups: (
  config: IAMPaginationConfiguration,
  input: ListGroupsCommandInput,
  ...rest: any[]
) => Paginator<ListGroupsCommandOutput> = createPaginator<
  IAMPaginationConfiguration,
  ListGroupsCommandInput,
  ListGroupsCommandOutput
>(IAMClient, ListGroupsCommand, "Marker", "Marker", "MaxItems");
