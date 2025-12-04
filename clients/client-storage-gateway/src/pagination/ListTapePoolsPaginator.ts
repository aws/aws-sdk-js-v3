// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListTapePoolsCommand,
  ListTapePoolsCommandInput,
  ListTapePoolsCommandOutput,
} from "../commands/ListTapePoolsCommand";
import { StorageGatewayClient } from "../StorageGatewayClient";
import { StorageGatewayPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListTapePools: (
  config: StorageGatewayPaginationConfiguration,
  input: ListTapePoolsCommandInput,
  ...rest: any[]
) => Paginator<ListTapePoolsCommandOutput> = createPaginator<
  StorageGatewayPaginationConfiguration,
  ListTapePoolsCommandInput,
  ListTapePoolsCommandOutput
>(StorageGatewayClient, ListTapePoolsCommand, "Marker", "Marker", "Limit");
