import { EC2 } from "../EC2";
import { EC2Client } from "../EC2Client";
import { PaginationConfiguration } from "@aws-sdk/types";

export interface EC2PaginationConfiguration extends PaginationConfiguration {
  client: EC2 | EC2Client;
}
