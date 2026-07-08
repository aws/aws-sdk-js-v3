// smithy-typescript generated code
import { PaginationConfiguration } from "@smithy/types";

import { DynamoDBDocument } from "../DynamoDBDocument";
import { DynamoDBDocumentClient } from "../DynamoDBDocumentClient";

/**
 * @public
 */
export type { PaginationConfiguration };

/**
 * @public
 */
export interface DynamoDBDocumentPaginationConfiguration extends PaginationConfiguration {
  client: DynamoDBDocument | DynamoDBDocumentClient;
}
