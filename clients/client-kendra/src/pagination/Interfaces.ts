import { Kendra } from "../Kendra";
import { KendraClient } from "../KendraClient";
import { PaginationConfiguration } from "@aws-sdk/types";

export interface KendraPaginationConfiguration extends PaginationConfiguration {
  client: Kendra | KendraClient;
}
