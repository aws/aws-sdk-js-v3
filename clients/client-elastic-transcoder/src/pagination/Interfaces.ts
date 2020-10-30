import { ElasticTranscoder } from "../ElasticTranscoder";
import { ElasticTranscoderClient } from "../ElasticTranscoderClient";
import { PaginationConfiguration } from "@aws-sdk/types";

export interface ElasticTranscoderPaginationConfiguration extends PaginationConfiguration {
  client: ElasticTranscoder | ElasticTranscoderClient;
}
