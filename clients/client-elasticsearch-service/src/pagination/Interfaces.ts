import { ElasticsearchService } from "../ElasticsearchService";
import { ElasticsearchServiceClient } from "../ElasticsearchServiceClient";
import { PaginationConfiguration } from "@aws-sdk/types";

export interface ElasticsearchServicePaginationConfiguration extends PaginationConfiguration {
  client: ElasticsearchService | ElasticsearchServiceClient;
}
