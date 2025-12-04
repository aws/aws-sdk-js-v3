// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import { ListVolumesCommand, ListVolumesCommandInput, ListVolumesCommandOutput } from "../commands/ListVolumesCommand";
import { StorageGatewayClient } from "../StorageGatewayClient";
import { StorageGatewayPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListVolumes: (
  config: StorageGatewayPaginationConfiguration,
  input: ListVolumesCommandInput,
  ...rest: any[]
) => Paginator<ListVolumesCommandOutput> = createPaginator<
  StorageGatewayPaginationConfiguration,
  ListVolumesCommandInput,
  ListVolumesCommandOutput
>(StorageGatewayClient, ListVolumesCommand, "Marker", "Marker", "Limit");
