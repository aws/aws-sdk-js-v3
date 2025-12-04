// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import { ListTapesCommand, ListTapesCommandInput, ListTapesCommandOutput } from "../commands/ListTapesCommand";
import { StorageGatewayClient } from "../StorageGatewayClient";
import { StorageGatewayPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListTapes: (
  config: StorageGatewayPaginationConfiguration,
  input: ListTapesCommandInput,
  ...rest: any[]
) => Paginator<ListTapesCommandOutput> = createPaginator<
  StorageGatewayPaginationConfiguration,
  ListTapesCommandInput,
  ListTapesCommandOutput
>(StorageGatewayClient, ListTapesCommand, "Marker", "Marker", "Limit");
