// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import { ListUploadsCommand, ListUploadsCommandInput, ListUploadsCommandOutput } from "../commands/ListUploadsCommand";
import { DeviceFarmClient } from "../DeviceFarmClient";
import { DeviceFarmPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListUploads: (
  config: DeviceFarmPaginationConfiguration,
  input: ListUploadsCommandInput,
  ...rest: any[]
) => Paginator<ListUploadsCommandOutput> = createPaginator<
  DeviceFarmPaginationConfiguration,
  ListUploadsCommandInput,
  ListUploadsCommandOutput
>(DeviceFarmClient, ListUploadsCommand, "nextToken", "nextToken", "");
