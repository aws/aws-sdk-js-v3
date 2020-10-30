import { Braket } from "../Braket";
import { BraketClient } from "../BraketClient";
import { PaginationConfiguration } from "@aws-sdk/types";

export interface BraketPaginationConfiguration extends PaginationConfiguration {
  client: Braket | BraketClient;
}
