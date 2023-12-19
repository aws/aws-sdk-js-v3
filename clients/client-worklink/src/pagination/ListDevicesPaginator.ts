// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import { Paginator } from "@smithy/types";

import { ListDevicesCommand, ListDevicesCommandInput, ListDevicesCommandOutput } from "../commands/ListDevicesCommand";
import { WorkLinkClient } from "../WorkLinkClient";
import { WorkLinkPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListDevices: (
  config: WorkLinkPaginationConfiguration,
  input: ListDevicesCommandInput,
  ...rest: any[]
) => Paginator<ListDevicesCommandOutput> = createPaginator<
  WorkLinkPaginationConfiguration,
  ListDevicesCommandInput,
  ListDevicesCommandOutput
>(WorkLinkClient, ListDevicesCommand, "NextToken", "NextToken", "MaxResults");
