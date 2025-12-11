// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import { ListGroupsCommand, ListGroupsCommandInput, ListGroupsCommandOutput } from "../commands/ListGroupsCommand";
import { QBusinessClient } from "../QBusinessClient";
import { QBusinessPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListGroups: (
  config: QBusinessPaginationConfiguration,
  input: ListGroupsCommandInput,
  ...rest: any[]
) => Paginator<ListGroupsCommandOutput> = createPaginator<
  QBusinessPaginationConfiguration,
  ListGroupsCommandInput,
  ListGroupsCommandOutput
>(QBusinessClient, ListGroupsCommand, "nextToken", "nextToken", "maxResults");
