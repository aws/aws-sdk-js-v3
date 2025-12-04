// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import { ListMembersCommand, ListMembersCommandInput, ListMembersCommandOutput } from "../commands/ListMembersCommand";
import { DetectiveClient } from "../DetectiveClient";
import { DetectivePaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListMembers: (
  config: DetectivePaginationConfiguration,
  input: ListMembersCommandInput,
  ...rest: any[]
) => Paginator<ListMembersCommandOutput> = createPaginator<
  DetectivePaginationConfiguration,
  ListMembersCommandInput,
  ListMembersCommandOutput
>(DetectiveClient, ListMembersCommand, "NextToken", "NextToken", "MaxResults");
