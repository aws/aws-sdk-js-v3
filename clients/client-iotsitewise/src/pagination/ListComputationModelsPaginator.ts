// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import { Paginator } from "@smithy/types";

import {
  ListComputationModelsCommand,
  ListComputationModelsCommandInput,
  ListComputationModelsCommandOutput,
} from "../commands/ListComputationModelsCommand";
import { IoTSiteWiseClient } from "../IoTSiteWiseClient";
import { IoTSiteWisePaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListComputationModels: (
  config: IoTSiteWisePaginationConfiguration,
  input: ListComputationModelsCommandInput,
  ...rest: any[]
) => Paginator<ListComputationModelsCommandOutput> = createPaginator<
  IoTSiteWisePaginationConfiguration,
  ListComputationModelsCommandInput,
  ListComputationModelsCommandOutput
>(IoTSiteWiseClient, ListComputationModelsCommand, "nextToken", "nextToken", "maxResults");
