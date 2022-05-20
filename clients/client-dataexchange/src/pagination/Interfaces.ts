// smithy-typescript generated code
import { PaginationConfiguration } from "@aws-sdk/types";

import { DataExchange } from "../DataExchange";
import { DataExchangeClient } from "../DataExchangeClient";

export interface DataExchangePaginationConfiguration extends PaginationConfiguration {
  client: DataExchange | DataExchangeClient;
}
