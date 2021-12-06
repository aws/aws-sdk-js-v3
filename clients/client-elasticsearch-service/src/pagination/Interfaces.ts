import { PaginationConfiguration } from "@aws-sdk/types";

import { ElasticsearchService } from "../ElasticsearchService";
import { ElasticsearchServiceClient } from "../ElasticsearchServiceClient";

export interface ElasticsearchServicePaginationConfiguration extends PaginationConfiguration {
  client: ElasticsearchService | ElasticsearchServiceClient;
}
