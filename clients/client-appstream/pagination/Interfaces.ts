import { AppStream } from "../AppStream";
import { AppStreamClient } from "../AppStreamClient";
import { PaginationConfiguration } from "@aws-sdk/types";

export interface AppStreamPaginationConfiguration extends PaginationConfiguration {
  client: AppStream | AppStreamClient;
}
