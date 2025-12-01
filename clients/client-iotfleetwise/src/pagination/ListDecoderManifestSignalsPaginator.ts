// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListDecoderManifestSignalsCommand,
  ListDecoderManifestSignalsCommandInput,
  ListDecoderManifestSignalsCommandOutput,
} from "../commands/ListDecoderManifestSignalsCommand";
import { IoTFleetWiseClient } from "../IoTFleetWiseClient";
import { IoTFleetWisePaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListDecoderManifestSignals: (
  config: IoTFleetWisePaginationConfiguration,
  input: ListDecoderManifestSignalsCommandInput,
  ...rest: any[]
) => Paginator<ListDecoderManifestSignalsCommandOutput> = createPaginator<
  IoTFleetWisePaginationConfiguration,
  ListDecoderManifestSignalsCommandInput,
  ListDecoderManifestSignalsCommandOutput
>(IoTFleetWiseClient, ListDecoderManifestSignalsCommand, "nextToken", "nextToken", "maxResults");
