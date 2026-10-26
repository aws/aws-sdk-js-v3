// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListSourceEndpointsCommand,
  ListSourceEndpointsCommandInput,
  ListSourceEndpointsCommandOutput,
} from "../commands/ListSourceEndpointsCommand";
import { MediaConnectClient } from "../MediaConnectClient";
import type { MediaConnectPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListSourceEndpoints: (
  config: MediaConnectPaginationConfiguration,
  input: ListSourceEndpointsCommandInput,
  ...rest: any[]
) => Paginator<ListSourceEndpointsCommandOutput> = createPaginator<
  MediaConnectPaginationConfiguration,
  ListSourceEndpointsCommandInput,
  ListSourceEndpointsCommandOutput
>(MediaConnectClient, ListSourceEndpointsCommand, "NextToken", "NextToken", "MaxResults");
