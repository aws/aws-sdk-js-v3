// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListGuestUsersCommand,
  ListGuestUsersCommandInput,
  ListGuestUsersCommandOutput,
} from "../commands/ListGuestUsersCommand";
import { WickrClient } from "../WickrClient";
import { WickrPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListGuestUsers: (
  config: WickrPaginationConfiguration,
  input: ListGuestUsersCommandInput,
  ...rest: any[]
) => Paginator<ListGuestUsersCommandOutput> = createPaginator<
  WickrPaginationConfiguration,
  ListGuestUsersCommandInput,
  ListGuestUsersCommandOutput
>(WickrClient, ListGuestUsersCommand, "nextToken", "nextToken", "maxResults");
