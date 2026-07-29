// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListPipelineExecutionsCommand,
  ListPipelineExecutionsCommandInput,
  ListPipelineExecutionsCommandOutput,
} from "../commands/ListPipelineExecutionsCommand";
import { IoTSiteWiseClient } from "../IoTSiteWiseClient";
import type { IoTSiteWisePaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListPipelineExecutions: (
  config: IoTSiteWisePaginationConfiguration,
  input: ListPipelineExecutionsCommandInput,
  ...rest: any[]
) => Paginator<ListPipelineExecutionsCommandOutput> = createPaginator<
  IoTSiteWisePaginationConfiguration,
  ListPipelineExecutionsCommandInput,
  ListPipelineExecutionsCommandOutput
>(IoTSiteWiseClient, ListPipelineExecutionsCommand, "nextToken", "nextToken", "maxResults");
