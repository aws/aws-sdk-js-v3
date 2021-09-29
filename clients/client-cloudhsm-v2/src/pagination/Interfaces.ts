import { CloudHSMV2 } from "../CloudHSMV2";
import { CloudHSMV2Client } from "../CloudHSMV2Client";
import { PaginationConfiguration } from "@aws-sdk/types";

export interface CloudHSMV2PaginationConfiguration extends PaginationConfiguration {
  client: CloudHSMV2 | CloudHSMV2Client;
}
