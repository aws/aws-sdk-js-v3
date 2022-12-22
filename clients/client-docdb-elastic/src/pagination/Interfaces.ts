// smithy-typescript generated code
import { PaginationConfiguration } from "@aws-sdk/types";

import { DocDBElastic } from "../DocDBElastic";
import { DocDBElasticClient } from "../DocDBElasticClient";

export interface DocDBElasticPaginationConfiguration extends PaginationConfiguration {
  client: DocDBElastic | DocDBElasticClient;
}
