import { SMS } from "../SMS";
import { SMSClient } from "../SMSClient";
import { PaginationConfiguration } from "@aws-sdk/types";

export interface SMSPaginationConfiguration extends PaginationConfiguration {
  client: SMS | SMSClient;
}
