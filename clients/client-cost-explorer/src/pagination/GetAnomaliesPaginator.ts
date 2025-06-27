// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import { Paginator } from "@smithy/types";

import {
  GetAnomaliesCommand,
  GetAnomaliesCommandInput,
  GetAnomaliesCommandOutput,
} from "../commands/GetAnomaliesCommand";
import { CostExplorerClient } from "../CostExplorerClient";
import { CostExplorerPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateGetAnomalies: (
  config: CostExplorerPaginationConfiguration,
  input: GetAnomaliesCommandInput,
  ...rest: any[]
) => Paginator<GetAnomaliesCommandOutput> = createPaginator<
  CostExplorerPaginationConfiguration,
  GetAnomaliesCommandInput,
  GetAnomaliesCommandOutput
>(CostExplorerClient, GetAnomaliesCommand, "NextPageToken", "NextPageToken", "MaxResults");
