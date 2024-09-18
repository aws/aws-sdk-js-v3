// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import { Paginator } from "@smithy/types";

import { ListGroupsCommand, ListGroupsCommandInput, ListGroupsCommandOutput } from "../commands/ListGroupsCommand";
import { DirectoryServiceDataClient } from "../DirectoryServiceDataClient";
import { DirectoryServiceDataPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListGroups: (
  config: DirectoryServiceDataPaginationConfiguration,
  input: ListGroupsCommandInput,
  ...rest: any[]
) => Paginator<ListGroupsCommandOutput> = createPaginator<
  DirectoryServiceDataPaginationConfiguration,
  ListGroupsCommandInput,
  ListGroupsCommandOutput
>(DirectoryServiceDataClient, ListGroupsCommand, "NextToken", "NextToken", "MaxResults");
