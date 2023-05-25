// smithy-typescript generated code
import { PaginationConfiguration } from "@aws-sdk/types";

import { DynamoDBDocument } from "../DynamoDBDocument";
import { DynamoDBDocumentClient } from "../DynamoDBDocumentClient";

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
