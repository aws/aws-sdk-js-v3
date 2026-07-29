// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListPipelinesCommand,
  ListPipelinesCommandInput,
  ListPipelinesCommandOutput,
} from "../commands/ListPipelinesCommand";
import { IoTSiteWiseClient } from "../IoTSiteWiseClient";
import type { IoTSiteWisePaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListPipelines: (
  config: IoTSiteWisePaginationConfiguration,
  input: ListPipelinesCommandInput,
  ...rest: any[]
) => Paginator<ListPipelinesCommandOutput> = createPaginator<
  IoTSiteWisePaginationConfiguration,
  ListPipelinesCommandInput,
  ListPipelinesCommandOutput
>(IoTSiteWiseClient, ListPipelinesCommand, "nextToken", "nextToken", "maxResults");
