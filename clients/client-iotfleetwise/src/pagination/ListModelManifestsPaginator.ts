// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListModelManifestsCommand,
  ListModelManifestsCommandInput,
  ListModelManifestsCommandOutput,
} from "../commands/ListModelManifestsCommand";
import { IoTFleetWiseClient } from "../IoTFleetWiseClient";
import { IoTFleetWisePaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListModelManifests: (
  config: IoTFleetWisePaginationConfiguration,
  input: ListModelManifestsCommandInput,
  ...rest: any[]
) => Paginator<ListModelManifestsCommandOutput> = createPaginator<
  IoTFleetWisePaginationConfiguration,
  ListModelManifestsCommandInput,
  ListModelManifestsCommandOutput
>(IoTFleetWiseClient, ListModelManifestsCommand, "nextToken", "nextToken", "maxResults");
