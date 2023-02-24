// smithy-typescript generated code
import { PaginationConfiguration } from "@aws-sdk/types";

import { KendraRanking } from "../KendraRanking";
import { KendraRankingClient } from "../KendraRankingClient";

export interface KendraRankingPaginationConfiguration extends PaginationConfiguration {
  client: KendraRanking | KendraRankingClient;
}
