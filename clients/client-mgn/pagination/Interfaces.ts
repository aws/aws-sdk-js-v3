import { Mgn } from "../Mgn";
import { MgnClient } from "../MgnClient";
import { PaginationConfiguration } from "@aws-sdk/types";

export interface MgnPaginationConfiguration extends PaginationConfiguration {
  client: Mgn | MgnClient;
}
