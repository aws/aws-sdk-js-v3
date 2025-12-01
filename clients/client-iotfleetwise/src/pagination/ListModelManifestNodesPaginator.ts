// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListModelManifestNodesCommand,
  ListModelManifestNodesCommandInput,
  ListModelManifestNodesCommandOutput,
} from "../commands/ListModelManifestNodesCommand";
import { IoTFleetWiseClient } from "../IoTFleetWiseClient";
import { IoTFleetWisePaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListModelManifestNodes: (
  config: IoTFleetWisePaginationConfiguration,
  input: ListModelManifestNodesCommandInput,
  ...rest: any[]
) => Paginator<ListModelManifestNodesCommandOutput> = createPaginator<
  IoTFleetWisePaginationConfiguration,
  ListModelManifestNodesCommandInput,
  ListModelManifestNodesCommandOutput
>(IoTFleetWiseClient, ListModelManifestNodesCommand, "nextToken", "nextToken", "maxResults");
