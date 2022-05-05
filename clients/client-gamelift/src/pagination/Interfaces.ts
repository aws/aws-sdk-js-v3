// smithy-typescript generated code
import { PaginationConfiguration } from "@aws-sdk/types";

import { GameLift } from "../GameLift";
import { GameLiftClient } from "../GameLiftClient";

export interface GameLiftPaginationConfiguration extends PaginationConfiguration {
  client: GameLift | GameLiftClient;
}
