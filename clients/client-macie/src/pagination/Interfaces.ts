import { Macie } from "../Macie";
import { MacieClient } from "../MacieClient";
import { PaginationConfiguration } from "@aws-sdk/types";

export interface MaciePaginationConfiguration extends PaginationConfiguration {
  client: Macie | MacieClient;
}
