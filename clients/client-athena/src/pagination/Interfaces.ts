import { Athena } from "../Athena";
import { AthenaClient } from "../AthenaClient";
import { PaginationConfiguration } from "@aws-sdk/types";

export interface AthenaPaginationConfiguration extends PaginationConfiguration {
  client: Athena | AthenaClient;
}
