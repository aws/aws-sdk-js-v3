// smithy-typescript generated code
import { PaginationConfiguration } from "@aws-sdk/types";

import { CostExplorer } from "../CostExplorer";
import { CostExplorerClient } from "../CostExplorerClient";

export interface CostExplorerPaginationConfiguration extends PaginationConfiguration {
  client: CostExplorer | CostExplorerClient;
}
