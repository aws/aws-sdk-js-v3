// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListDestinationEndpointsCommand,
  ListDestinationEndpointsCommandInput,
  ListDestinationEndpointsCommandOutput,
} from "../commands/ListDestinationEndpointsCommand";
import { MediaConnectClient } from "../MediaConnectClient";
import type { MediaConnectPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListDestinationEndpoints: (
  config: MediaConnectPaginationConfiguration,
  input: ListDestinationEndpointsCommandInput,
  ...rest: any[]
) => Paginator<ListDestinationEndpointsCommandOutput> = createPaginator<
  MediaConnectPaginationConfiguration,
  ListDestinationEndpointsCommandInput,
  ListDestinationEndpointsCommandOutput
>(MediaConnectClient, ListDestinationEndpointsCommand, "NextToken", "NextToken", "MaxResults");
