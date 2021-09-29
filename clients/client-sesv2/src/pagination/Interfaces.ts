import { SESv2 } from "../SESv2";
import { SESv2Client } from "../SESv2Client";
import { PaginationConfiguration } from "@aws-sdk/types";

export interface SESv2PaginationConfiguration extends PaginationConfiguration {
  client: SESv2 | SESv2Client;
}
