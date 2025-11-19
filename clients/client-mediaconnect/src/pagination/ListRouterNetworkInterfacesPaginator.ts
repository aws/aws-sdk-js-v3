// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import { Paginator } from "@smithy/types";

import {
  ListRouterNetworkInterfacesCommand,
  ListRouterNetworkInterfacesCommandInput,
  ListRouterNetworkInterfacesCommandOutput,
} from "../commands/ListRouterNetworkInterfacesCommand";
import { MediaConnectClient } from "../MediaConnectClient";
import { MediaConnectPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListRouterNetworkInterfaces: (
  config: MediaConnectPaginationConfiguration,
  input: ListRouterNetworkInterfacesCommandInput,
  ...rest: any[]
) => Paginator<ListRouterNetworkInterfacesCommandOutput> = createPaginator<
  MediaConnectPaginationConfiguration,
  ListRouterNetworkInterfacesCommandInput,
  ListRouterNetworkInterfacesCommandOutput
>(MediaConnectClient, ListRouterNetworkInterfacesCommand, "NextToken", "NextToken", "MaxResults");
