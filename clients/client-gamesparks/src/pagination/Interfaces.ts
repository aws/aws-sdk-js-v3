// smithy-typescript generated code
import { PaginationConfiguration } from "@aws-sdk/types";

import { GameSparks } from "../GameSparks";
import { GameSparksClient } from "../GameSparksClient";

export interface GameSparksPaginationConfiguration extends PaginationConfiguration {
  client: GameSparks | GameSparksClient;
}
