// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListSignalCatalogsCommand,
  ListSignalCatalogsCommandInput,
  ListSignalCatalogsCommandOutput,
} from "../commands/ListSignalCatalogsCommand";
import { IoTFleetWiseClient } from "../IoTFleetWiseClient";
import { IoTFleetWisePaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListSignalCatalogs: (
  config: IoTFleetWisePaginationConfiguration,
  input: ListSignalCatalogsCommandInput,
  ...rest: any[]
) => Paginator<ListSignalCatalogsCommandOutput> = createPaginator<
  IoTFleetWisePaginationConfiguration,
  ListSignalCatalogsCommandInput,
  ListSignalCatalogsCommandOutput
>(IoTFleetWiseClient, ListSignalCatalogsCommand, "nextToken", "nextToken", "maxResults");
