// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListGroupMembersCommand,
  ListGroupMembersCommandInput,
  ListGroupMembersCommandOutput,
} from "../commands/ListGroupMembersCommand";
import { WorkMailClient } from "../WorkMailClient";
import { WorkMailPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListGroupMembers: (
  config: WorkMailPaginationConfiguration,
  input: ListGroupMembersCommandInput,
  ...rest: any[]
) => Paginator<ListGroupMembersCommandOutput> = createPaginator<
  WorkMailPaginationConfiguration,
  ListGroupMembersCommandInput,
  ListGroupMembersCommandOutput
>(WorkMailClient, ListGroupMembersCommand, "NextToken", "NextToken", "MaxResults");
