// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import { ListDevicesCommand, ListDevicesCommandInput, ListDevicesCommandOutput } from "../commands/ListDevicesCommand";
import { WorkSpacesThinClientClient } from "../WorkSpacesThinClientClient";
import { WorkSpacesThinClientPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListDevices: (
  config: WorkSpacesThinClientPaginationConfiguration,
  input: ListDevicesCommandInput,
  ...rest: any[]
) => Paginator<ListDevicesCommandOutput> = createPaginator<
  WorkSpacesThinClientPaginationConfiguration,
  ListDevicesCommandInput,
  ListDevicesCommandOutput
>(WorkSpacesThinClientClient, ListDevicesCommand, "nextToken", "nextToken", "maxResults");
