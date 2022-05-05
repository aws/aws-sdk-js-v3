// smithy-typescript generated code
import { PaginationConfiguration } from "@aws-sdk/types";

import { KinesisVideo } from "../KinesisVideo";
import { KinesisVideoClient } from "../KinesisVideoClient";

export interface KinesisVideoPaginationConfiguration extends PaginationConfiguration {
  client: KinesisVideo | KinesisVideoClient;
}
