import { PaginationConfiguration } from "@aws-sdk/types";

import { DynamoDB } from "../DynamoDB";
import { DynamoDBClient } from "../DynamoDBClient";

export interface DynamoDBPaginationConfiguration extends PaginationConfiguration {
  client: DynamoDB | DynamoDBClient;
}
