import { GameLift } from "../GameLift";
import { GameLiftClient } from "../GameLiftClient";
import { PaginationConfiguration } from "@aws-sdk/types";

export interface GameLiftPaginationConfiguration extends PaginationConfiguration {
  client: GameLift | GameLiftClient;
}
