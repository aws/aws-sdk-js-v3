import { DataExchange } from "../DataExchange";
import { DataExchangeClient } from "../DataExchangeClient";
import { PaginationConfiguration } from "@aws-sdk/types";

export interface DataExchangePaginationConfiguration extends PaginationConfiguration {
  client: DataExchange | DataExchangeClient;
}
