import { AppRunner } from "../AppRunner";
import { AppRunnerClient } from "../AppRunnerClient";
import { PaginationConfiguration } from "@aws-sdk/types";

export interface AppRunnerPaginationConfiguration extends PaginationConfiguration {
  client: AppRunner | AppRunnerClient;
}
