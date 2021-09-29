import { LexModelsV2 } from "../LexModelsV2";
import { LexModelsV2Client } from "../LexModelsV2Client";
import { PaginationConfiguration } from "@aws-sdk/types";

export interface LexModelsV2PaginationConfiguration extends PaginationConfiguration {
  client: LexModelsV2 | LexModelsV2Client;
}
