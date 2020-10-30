import { Schemas } from "../Schemas";
import { SchemasClient } from "../SchemasClient";
import { PaginationConfiguration } from "@aws-sdk/types";

export interface SchemasPaginationConfiguration extends PaginationConfiguration {
  client: Schemas | SchemasClient;
}
