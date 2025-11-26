// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import { ChimeSDKIdentityClient } from "../ChimeSDKIdentityClient";
import {
  ListAppInstanceUsersCommand,
  ListAppInstanceUsersCommandInput,
  ListAppInstanceUsersCommandOutput,
} from "../commands/ListAppInstanceUsersCommand";
import { ChimeSDKIdentityPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListAppInstanceUsers: (
  config: ChimeSDKIdentityPaginationConfiguration,
  input: ListAppInstanceUsersCommandInput,
  ...rest: any[]
) => Paginator<ListAppInstanceUsersCommandOutput> = createPaginator<
  ChimeSDKIdentityPaginationConfiguration,
  ListAppInstanceUsersCommandInput,
  ListAppInstanceUsersCommandOutput
>(ChimeSDKIdentityClient, ListAppInstanceUsersCommand, "NextToken", "NextToken", "MaxResults");
