// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import { ListGroupsCommand, ListGroupsCommandInput, ListGroupsCommandOutput } from "../commands/ListGroupsCommand";
import { WorkMailClient } from "../WorkMailClient";
import { WorkMailPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListGroups: (
  config: WorkMailPaginationConfiguration,
  input: ListGroupsCommandInput,
  ...rest: any[]
) => Paginator<ListGroupsCommandOutput> = createPaginator<
  WorkMailPaginationConfiguration,
  ListGroupsCommandInput,
  ListGroupsCommandOutput
>(WorkMailClient, ListGroupsCommand, "NextToken", "NextToken", "MaxResults");
