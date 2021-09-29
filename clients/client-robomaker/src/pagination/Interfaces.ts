import { RoboMaker } from "../RoboMaker";
import { RoboMakerClient } from "../RoboMakerClient";
import { PaginationConfiguration } from "@aws-sdk/types";

export interface RoboMakerPaginationConfiguration extends PaginationConfiguration {
  client: RoboMaker | RoboMakerClient;
}
