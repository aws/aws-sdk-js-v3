// smithy-typescript generated code
import { PaginationConfiguration } from "@aws-sdk/types";

import { Kinesis } from "../Kinesis";
import { KinesisClient } from "../KinesisClient";

export interface KinesisPaginationConfiguration extends PaginationConfiguration {
  client: Kinesis | KinesisClient;
}
