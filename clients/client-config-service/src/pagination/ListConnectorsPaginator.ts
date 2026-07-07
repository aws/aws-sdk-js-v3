// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListConnectorsCommand,
  ListConnectorsCommandInput,
  ListConnectorsCommandOutput,
} from "../commands/ListConnectorsCommand";
import { ConfigServiceClient } from "../ConfigServiceClient";
import type { ConfigServicePaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListConnectors: (
  config: ConfigServicePaginationConfiguration,
  input: ListConnectorsCommandInput,
  ...rest: any[]
) => Paginator<ListConnectorsCommandOutput> = createPaginator<
  ConfigServicePaginationConfiguration,
  ListConnectorsCommandInput,
  ListConnectorsCommandOutput
>(ConfigServiceClient, ListConnectorsCommand, "NextToken", "NextToken", "MaxResults");
