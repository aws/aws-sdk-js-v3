// smithy-typescript generated code
import { PaginationConfiguration } from "@aws-sdk/types";

import { EC2 } from "../EC2";
import { EC2Client } from "../EC2Client";

export interface EC2PaginationConfiguration extends PaginationConfiguration {
  client: EC2 | EC2Client;
}
