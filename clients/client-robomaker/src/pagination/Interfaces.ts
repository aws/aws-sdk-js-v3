// smithy-typescript generated code
import { PaginationConfiguration } from "@aws-sdk/types";

import { RoboMaker } from "../RoboMaker";
import { RoboMakerClient } from "../RoboMakerClient";

export interface RoboMakerPaginationConfiguration extends PaginationConfiguration {
  client: RoboMaker | RoboMakerClient;
}
