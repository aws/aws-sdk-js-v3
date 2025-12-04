// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListMobileDeviceAccessOverridesCommand,
  ListMobileDeviceAccessOverridesCommandInput,
  ListMobileDeviceAccessOverridesCommandOutput,
} from "../commands/ListMobileDeviceAccessOverridesCommand";
import { WorkMailClient } from "../WorkMailClient";
import { WorkMailPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListMobileDeviceAccessOverrides: (
  config: WorkMailPaginationConfiguration,
  input: ListMobileDeviceAccessOverridesCommandInput,
  ...rest: any[]
) => Paginator<ListMobileDeviceAccessOverridesCommandOutput> = createPaginator<
  WorkMailPaginationConfiguration,
  ListMobileDeviceAccessOverridesCommandInput,
  ListMobileDeviceAccessOverridesCommandOutput
>(WorkMailClient, ListMobileDeviceAccessOverridesCommand, "NextToken", "NextToken", "MaxResults");
