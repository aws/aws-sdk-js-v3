// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import { ListBridgesCommand, ListBridgesCommandInput, ListBridgesCommandOutput } from "../commands/ListBridgesCommand";
import { MediaConnectClient } from "../MediaConnectClient";
import { MediaConnectPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListBridges: (
  config: MediaConnectPaginationConfiguration,
  input: ListBridgesCommandInput,
  ...rest: any[]
) => Paginator<ListBridgesCommandOutput> = createPaginator<
  MediaConnectPaginationConfiguration,
  ListBridgesCommandInput,
  ListBridgesCommandOutput
>(MediaConnectClient, ListBridgesCommand, "NextToken", "NextToken", "MaxResults");
