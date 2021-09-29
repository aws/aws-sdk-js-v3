import { Glue } from "../Glue";
import { GlueClient } from "../GlueClient";
import { PaginationConfiguration } from "@aws-sdk/types";

export interface GluePaginationConfiguration extends PaginationConfiguration {
  client: Glue | GlueClient;
}
