import { Connect } from "../Connect";
import { ConnectClient } from "../ConnectClient";
import { PaginationConfiguration } from "@aws-sdk/types";

export interface ConnectPaginationConfiguration extends PaginationConfiguration {
  client: Connect | ConnectClient;
}
