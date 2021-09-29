import { Glacier } from "../Glacier";
import { GlacierClient } from "../GlacierClient";
import { PaginationConfiguration } from "@aws-sdk/types";

export interface GlacierPaginationConfiguration extends PaginationConfiguration {
  client: Glacier | GlacierClient;
}
