// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListFolderMembersCommand,
  ListFolderMembersCommandInput,
  ListFolderMembersCommandOutput,
} from "../commands/ListFolderMembersCommand";
import { QuickSightClient } from "../QuickSightClient";
import { QuickSightPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListFolderMembers: (
  config: QuickSightPaginationConfiguration,
  input: ListFolderMembersCommandInput,
  ...rest: any[]
) => Paginator<ListFolderMembersCommandOutput> = createPaginator<
  QuickSightPaginationConfiguration,
  ListFolderMembersCommandInput,
  ListFolderMembersCommandOutput
>(QuickSightClient, ListFolderMembersCommand, "NextToken", "NextToken", "MaxResults");
