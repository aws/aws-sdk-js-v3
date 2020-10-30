import { Appflow } from "../Appflow";
import { AppflowClient } from "../AppflowClient";
import { PaginationConfiguration } from "@aws-sdk/types";

export interface AppflowPaginationConfiguration extends PaginationConfiguration {
  client: Appflow | AppflowClient;
}
