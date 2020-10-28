import { SES } from "../SES";
import { SESClient } from "../SESClient";
import { PaginationConfiguration } from "@aws-sdk/types";

export interface SESPaginationConfiguration extends PaginationConfiguration {
  client: SES | SESClient;
}
