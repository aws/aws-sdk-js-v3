// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListDecoderManifestsCommand,
  ListDecoderManifestsCommandInput,
  ListDecoderManifestsCommandOutput,
} from "../commands/ListDecoderManifestsCommand";
import { IoTFleetWiseClient } from "../IoTFleetWiseClient";
import { IoTFleetWisePaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListDecoderManifests: (
  config: IoTFleetWisePaginationConfiguration,
  input: ListDecoderManifestsCommandInput,
  ...rest: any[]
) => Paginator<ListDecoderManifestsCommandOutput> = createPaginator<
  IoTFleetWisePaginationConfiguration,
  ListDecoderManifestsCommandInput,
  ListDecoderManifestsCommandOutput
>(IoTFleetWiseClient, ListDecoderManifestsCommand, "nextToken", "nextToken", "maxResults");
