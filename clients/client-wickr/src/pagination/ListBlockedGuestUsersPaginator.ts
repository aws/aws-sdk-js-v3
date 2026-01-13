// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListBlockedGuestUsersCommand,
  ListBlockedGuestUsersCommandInput,
  ListBlockedGuestUsersCommandOutput,
} from "../commands/ListBlockedGuestUsersCommand";
import { WickrClient } from "../WickrClient";
import { WickrPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListBlockedGuestUsers: (
  config: WickrPaginationConfiguration,
  input: ListBlockedGuestUsersCommandInput,
  ...rest: any[]
) => Paginator<ListBlockedGuestUsersCommandOutput> = createPaginator<
  WickrPaginationConfiguration,
  ListBlockedGuestUsersCommandInput,
  ListBlockedGuestUsersCommandOutput
>(WickrClient, ListBlockedGuestUsersCommand, "nextToken", "nextToken", "maxResults");
