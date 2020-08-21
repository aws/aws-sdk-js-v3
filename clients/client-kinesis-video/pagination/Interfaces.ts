import { KinesisVideo } from "../KinesisVideo";
import { KinesisVideoClient } from "../KinesisVideoClient";
import { PaginationConfiguration } from "@aws-sdk/types";

export interface KinesisVideoPaginationConfiguration extends PaginationConfiguration {
  client: KinesisVideo | KinesisVideoClient;
}
