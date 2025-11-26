// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListDecoderManifestNetworkInterfacesCommand,
  ListDecoderManifestNetworkInterfacesCommandInput,
  ListDecoderManifestNetworkInterfacesCommandOutput,
} from "../commands/ListDecoderManifestNetworkInterfacesCommand";
import { IoTFleetWiseClient } from "../IoTFleetWiseClient";
import { IoTFleetWisePaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListDecoderManifestNetworkInterfaces: (
  config: IoTFleetWisePaginationConfiguration,
  input: ListDecoderManifestNetworkInterfacesCommandInput,
  ...rest: any[]
) => Paginator<ListDecoderManifestNetworkInterfacesCommandOutput> = createPaginator<
  IoTFleetWisePaginationConfiguration,
  ListDecoderManifestNetworkInterfacesCommandInput,
  ListDecoderManifestNetworkInterfacesCommandOutput
>(IoTFleetWiseClient, ListDecoderManifestNetworkInterfacesCommand, "nextToken", "nextToken", "maxResults");
