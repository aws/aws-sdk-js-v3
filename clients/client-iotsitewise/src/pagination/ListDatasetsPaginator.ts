// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListDatasetsCommand,
  ListDatasetsCommandInput,
  ListDatasetsCommandOutput,
} from "../commands/ListDatasetsCommand";
import { IoTSiteWiseClient } from "../IoTSiteWiseClient";
import { IoTSiteWisePaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListDatasets: (
  config: IoTSiteWisePaginationConfiguration,
  input: ListDatasetsCommandInput,
  ...rest: any[]
) => Paginator<ListDatasetsCommandOutput> = createPaginator<
  IoTSiteWisePaginationConfiguration,
  ListDatasetsCommandInput,
  ListDatasetsCommandOutput
>(IoTSiteWiseClient, ListDatasetsCommand, "nextToken", "nextToken", "maxResults");
