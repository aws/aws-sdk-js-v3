import { Support } from "../Support";
import { SupportClient } from "../SupportClient";
import { PaginationConfiguration } from "@aws-sdk/types";

export interface SupportPaginationConfiguration extends PaginationConfiguration {
  client: Support | SupportClient;
}
