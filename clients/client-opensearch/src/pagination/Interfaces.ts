// smithy-typescript generated code
import { PaginationConfiguration } from "@aws-sdk/types";

import { OpenSearch } from "../OpenSearch";
import { OpenSearchClient } from "../OpenSearchClient";

export interface OpenSearchPaginationConfiguration extends PaginationConfiguration {
  client: OpenSearch | OpenSearchClient;
}
