// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import { Paginator } from "@smithy/types";

import {
  ListDeviceIdentifiersCommand,
  ListDeviceIdentifiersCommandInput,
  ListDeviceIdentifiersCommandOutput,
} from "../commands/ListDeviceIdentifiersCommand";
import { PrivateNetworksClient } from "../PrivateNetworksClient";
import { PrivateNetworksPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListDeviceIdentifiers: (
  config: PrivateNetworksPaginationConfiguration,
  input: ListDeviceIdentifiersCommandInput,
  ...rest: any[]
) => Paginator<ListDeviceIdentifiersCommandOutput> = createPaginator<
  PrivateNetworksPaginationConfiguration,
  ListDeviceIdentifiersCommandInput,
  ListDeviceIdentifiersCommandOutput
>(PrivateNetworksClient, ListDeviceIdentifiersCommand, "startToken", "nextToken", "maxResults");
