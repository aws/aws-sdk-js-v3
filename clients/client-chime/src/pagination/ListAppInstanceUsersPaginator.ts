// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import { Paginator } from "@smithy/types";

import { ChimeClient } from "../ChimeClient";
import {
  ListAppInstanceUsersCommand,
  ListAppInstanceUsersCommandInput,
  ListAppInstanceUsersCommandOutput,
} from "../commands/ListAppInstanceUsersCommand";
import { ChimePaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListAppInstanceUsers: (
  config: ChimePaginationConfiguration,
  input: ListAppInstanceUsersCommandInput,
  ...rest: any[]
) => Paginator<ListAppInstanceUsersCommandOutput> = createPaginator<
  ChimePaginationConfiguration,
  ListAppInstanceUsersCommandInput,
  ListAppInstanceUsersCommandOutput
>(ChimeClient, ListAppInstanceUsersCommand, "NextToken", "NextToken", "MaxResults");
