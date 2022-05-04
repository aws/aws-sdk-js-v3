// smithy-typescript generated code
import { PaginationConfiguration } from "@aws-sdk/types";

import { Transfer } from "../Transfer";
import { TransferClient } from "../TransferClient";

export interface TransferPaginationConfiguration extends PaginationConfiguration {
  client: Transfer | TransferClient;
}
