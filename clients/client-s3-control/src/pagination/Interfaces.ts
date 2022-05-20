// smithy-typescript generated code
import { PaginationConfiguration } from "@aws-sdk/types";

import { S3Control } from "../S3Control";
import { S3ControlClient } from "../S3ControlClient";

export interface S3ControlPaginationConfiguration extends PaginationConfiguration {
  client: S3Control | S3ControlClient;
}
