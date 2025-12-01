// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import { ChimeClient } from "../ChimeClient";
import { ListUsersCommand, ListUsersCommandInput, ListUsersCommandOutput } from "../commands/ListUsersCommand";
import { ChimePaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListUsers: (
  config: ChimePaginationConfiguration,
  input: ListUsersCommandInput,
  ...rest: any[]
) => Paginator<ListUsersCommandOutput> = createPaginator<
  ChimePaginationConfiguration,
  ListUsersCommandInput,
  ListUsersCommandOutput
>(ChimeClient, ListUsersCommand, "NextToken", "NextToken", "MaxResults");
