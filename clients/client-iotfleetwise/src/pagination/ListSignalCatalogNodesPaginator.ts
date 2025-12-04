// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListSignalCatalogNodesCommand,
  ListSignalCatalogNodesCommandInput,
  ListSignalCatalogNodesCommandOutput,
} from "../commands/ListSignalCatalogNodesCommand";
import { IoTFleetWiseClient } from "../IoTFleetWiseClient";
import { IoTFleetWisePaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListSignalCatalogNodes: (
  config: IoTFleetWisePaginationConfiguration,
  input: ListSignalCatalogNodesCommandInput,
  ...rest: any[]
) => Paginator<ListSignalCatalogNodesCommandOutput> = createPaginator<
  IoTFleetWisePaginationConfiguration,
  ListSignalCatalogNodesCommandInput,
  ListSignalCatalogNodesCommandOutput
>(IoTFleetWiseClient, ListSignalCatalogNodesCommand, "nextToken", "nextToken", "maxResults");
