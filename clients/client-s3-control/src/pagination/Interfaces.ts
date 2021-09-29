import { S3Control } from "../S3Control";
import { S3ControlClient } from "../S3ControlClient";
import { PaginationConfiguration } from "@aws-sdk/types";

export interface S3ControlPaginationConfiguration extends PaginationConfiguration {
  client: S3Control | S3ControlClient;
}
