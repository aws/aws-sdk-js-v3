import { Transfer } from "../Transfer";
import { TransferClient } from "../TransferClient";
import { PaginationConfiguration } from "@aws-sdk/types";

export interface TransferPaginationConfiguration extends PaginationConfiguration {
  client: Transfer | TransferClient;
}
