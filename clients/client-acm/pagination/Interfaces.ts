import { ACM } from "../ACM";
import { ACMClient } from "../ACMClient";
import { PaginationConfiguration } from "@aws-sdk/types";

export interface ACMPaginationConfiguration extends PaginationConfiguration {
  client: ACM | ACMClient;
}
