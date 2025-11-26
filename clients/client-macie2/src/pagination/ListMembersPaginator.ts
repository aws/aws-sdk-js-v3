// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import { ListMembersCommand, ListMembersCommandInput, ListMembersCommandOutput } from "../commands/ListMembersCommand";
import { Macie2Client } from "../Macie2Client";
import { Macie2PaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListMembers: (
  config: Macie2PaginationConfiguration,
  input: ListMembersCommandInput,
  ...rest: any[]
) => Paginator<ListMembersCommandOutput> = createPaginator<
  Macie2PaginationConfiguration,
  ListMembersCommandInput,
  ListMembersCommandOutput
>(Macie2Client, ListMembersCommand, "nextToken", "nextToken", "maxResults");
