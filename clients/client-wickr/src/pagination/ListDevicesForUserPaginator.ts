// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListDevicesForUserCommand,
  ListDevicesForUserCommandInput,
  ListDevicesForUserCommandOutput,
} from "../commands/ListDevicesForUserCommand";
import { WickrClient } from "../WickrClient";
import { WickrPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListDevicesForUser: (
  config: WickrPaginationConfiguration,
  input: ListDevicesForUserCommandInput,
  ...rest: any[]
) => Paginator<ListDevicesForUserCommandOutput> = createPaginator<
  WickrPaginationConfiguration,
  ListDevicesForUserCommandInput,
  ListDevicesForUserCommandOutput
>(WickrClient, ListDevicesForUserCommand, "nextToken", "nextToken", "maxResults");
