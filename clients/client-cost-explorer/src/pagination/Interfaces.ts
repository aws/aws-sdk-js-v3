import { CostExplorer } from "../CostExplorer";
import { CostExplorerClient } from "../CostExplorerClient";
import { PaginationConfiguration } from "@aws-sdk/types";

export interface CostExplorerPaginationConfiguration extends PaginationConfiguration {
  client: CostExplorer | CostExplorerClient;
}
