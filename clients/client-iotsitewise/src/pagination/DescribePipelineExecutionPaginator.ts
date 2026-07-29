// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  DescribePipelineExecutionCommand,
  DescribePipelineExecutionCommandInput,
  DescribePipelineExecutionCommandOutput,
} from "../commands/DescribePipelineExecutionCommand";
import { IoTSiteWiseClient } from "../IoTSiteWiseClient";
import type { IoTSiteWisePaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateDescribePipelineExecution: (
  config: IoTSiteWisePaginationConfiguration,
  input: DescribePipelineExecutionCommandInput,
  ...rest: any[]
) => Paginator<DescribePipelineExecutionCommandOutput> = createPaginator<
  IoTSiteWisePaginationConfiguration,
  DescribePipelineExecutionCommandInput,
  DescribePipelineExecutionCommandOutput
>(IoTSiteWiseClient, DescribePipelineExecutionCommand, "nextToken", "nextToken", "maxResults");
