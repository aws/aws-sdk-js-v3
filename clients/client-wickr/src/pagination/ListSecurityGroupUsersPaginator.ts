// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListSecurityGroupUsersCommand,
  ListSecurityGroupUsersCommandInput,
  ListSecurityGroupUsersCommandOutput,
} from "../commands/ListSecurityGroupUsersCommand";
import { WickrClient } from "../WickrClient";
import { WickrPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListSecurityGroupUsers: (
  config: WickrPaginationConfiguration,
  input: ListSecurityGroupUsersCommandInput,
  ...rest: any[]
) => Paginator<ListSecurityGroupUsersCommandOutput> = createPaginator<
  WickrPaginationConfiguration,
  ListSecurityGroupUsersCommandInput,
  ListSecurityGroupUsersCommandOutput
>(WickrClient, ListSecurityGroupUsersCommand, "nextToken", "nextToken", "maxResults");
