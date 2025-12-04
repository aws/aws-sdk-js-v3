// smithy-typescript generated code
import type { PaginationConfiguration } from "@smithy/types";

import { DocDBElasticClient } from "../DocDBElasticClient";

/**
 * @public
 */
export interface DocDBElasticPaginationConfiguration extends PaginationConfiguration {
  client: DocDBElasticClient;
}
