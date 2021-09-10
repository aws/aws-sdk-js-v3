import { OpenSearch } from "../OpenSearch";
import { OpenSearchClient } from "../OpenSearchClient";
import { PaginationConfiguration } from "@aws-sdk/types";

export interface OpenSearchPaginationConfiguration extends PaginationConfiguration {
  client: OpenSearch | OpenSearchClient;
}
