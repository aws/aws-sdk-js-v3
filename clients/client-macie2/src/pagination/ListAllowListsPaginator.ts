// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListAllowListsCommand,
  ListAllowListsCommandInput,
  ListAllowListsCommandOutput,
} from "../commands/ListAllowListsCommand";
import { Macie2Client } from "../Macie2Client";
import { Macie2PaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListAllowLists: (
  config: Macie2PaginationConfiguration,
  input: ListAllowListsCommandInput,
  ...rest: any[]
) => Paginator<ListAllowListsCommandOutput> = createPaginator<
  Macie2PaginationConfiguration,
  ListAllowListsCommandInput,
  ListAllowListsCommandOutput
>(Macie2Client, ListAllowListsCommand, "nextToken", "nextToken", "maxResults");
