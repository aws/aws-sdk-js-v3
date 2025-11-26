// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListMFADeviceTagsCommand,
  ListMFADeviceTagsCommandInput,
  ListMFADeviceTagsCommandOutput,
} from "../commands/ListMFADeviceTagsCommand";
import { IAMClient } from "../IAMClient";
import { IAMPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListMFADeviceTags: (
  config: IAMPaginationConfiguration,
  input: ListMFADeviceTagsCommandInput,
  ...rest: any[]
) => Paginator<ListMFADeviceTagsCommandOutput> = createPaginator<
  IAMPaginationConfiguration,
  ListMFADeviceTagsCommandInput,
  ListMFADeviceTagsCommandOutput
>(IAMClient, ListMFADeviceTagsCommand, "Marker", "Marker", "MaxItems");
