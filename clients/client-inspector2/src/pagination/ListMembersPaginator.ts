// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import { ListMembersCommand, ListMembersCommandInput, ListMembersCommandOutput } from "../commands/ListMembersCommand";
import { Inspector2Client } from "../Inspector2Client";
import { Inspector2PaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListMembers: (
  config: Inspector2PaginationConfiguration,
  input: ListMembersCommandInput,
  ...rest: any[]
) => Paginator<ListMembersCommandOutput> = createPaginator<
  Inspector2PaginationConfiguration,
  ListMembersCommandInput,
  ListMembersCommandOutput
>(Inspector2Client, ListMembersCommand, "nextToken", "nextToken", "maxResults");
