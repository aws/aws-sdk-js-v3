// smithy-typescript generated code
import { PaginationConfiguration } from "@aws-sdk/types";

import { ElasticTranscoder } from "../ElasticTranscoder";
import { ElasticTranscoderClient } from "../ElasticTranscoderClient";

export interface ElasticTranscoderPaginationConfiguration extends PaginationConfiguration {
  client: ElasticTranscoder | ElasticTranscoderClient;
}
