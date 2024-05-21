// smithy-typescript generated code
import { PaginationConfiguration } from "@smithy/types";

import type { DynamoDBDocument } from "../DynamoDBDocument";
import type { DynamoDBDocumentClient } from "../DynamoDBDocumentClient";

/**
 * @public
 */
export { PaginationConfiguration };

/**
 * @public
 */
export interface DynamoDBDocumentPaginationConfiguration extends PaginationConfiguration {
  client: DynamoDBDocument | DynamoDBDocumentClient;
}
