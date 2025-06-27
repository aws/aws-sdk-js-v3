// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import { Paginator } from "@smithy/types";

import {
  ListComputeNodeGroupsCommand,
  ListComputeNodeGroupsCommandInput,
  ListComputeNodeGroupsCommandOutput,
} from "../commands/ListComputeNodeGroupsCommand";
import { PCSClient } from "../PCSClient";
import { PCSPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListComputeNodeGroups: (
  config: PCSPaginationConfiguration,
  input: ListComputeNodeGroupsCommandInput,
  ...rest: any[]
) => Paginator<ListComputeNodeGroupsCommandOutput> = createPaginator<
  PCSPaginationConfiguration,
  ListComputeNodeGroupsCommandInput,
  ListComputeNodeGroupsCommandOutput
>(PCSClient, ListComputeNodeGroupsCommand, "nextToken", "nextToken", "maxResults");
