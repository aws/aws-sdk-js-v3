// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import { Paginator } from "@smithy/types";

import {
  ListCoreNetworkRoutingInformationCommand,
  ListCoreNetworkRoutingInformationCommandInput,
  ListCoreNetworkRoutingInformationCommandOutput,
} from "../commands/ListCoreNetworkRoutingInformationCommand";
import { NetworkManagerClient } from "../NetworkManagerClient";
import { NetworkManagerPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListCoreNetworkRoutingInformation: (
  config: NetworkManagerPaginationConfiguration,
  input: ListCoreNetworkRoutingInformationCommandInput,
  ...rest: any[]
) => Paginator<ListCoreNetworkRoutingInformationCommandOutput> = createPaginator<
  NetworkManagerPaginationConfiguration,
  ListCoreNetworkRoutingInformationCommandInput,
  ListCoreNetworkRoutingInformationCommandOutput
>(NetworkManagerClient, ListCoreNetworkRoutingInformationCommand, "NextToken", "NextToken", "MaxResults");
