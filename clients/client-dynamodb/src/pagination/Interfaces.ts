// smithy-typescript generated code
import { PaginationConfiguration } from "@aws-sdk/types";

import { DynamoDBClient } from "../DynamoDBClient";

/**
 * @public
 */
export interface DynamoDBPaginationConfiguration extends PaginationConfiguration {
  client: DynamoDBClient;
}
