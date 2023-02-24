// smithy-typescript generated code
import { PaginationConfiguration } from "@aws-sdk/types";

import { ControlTower } from "../ControlTower";
import { ControlTowerClient } from "../ControlTowerClient";

export interface ControlTowerPaginationConfiguration extends PaginationConfiguration {
  client: ControlTower | ControlTowerClient;
}
