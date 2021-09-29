import { DynamoDB } from "../DynamoDB";
import { DynamoDBClient } from "../DynamoDBClient";
import { PaginationConfiguration } from "@aws-sdk/types";

export interface DynamoDBPaginationConfiguration extends PaginationConfiguration {
  client: DynamoDB | DynamoDBClient;
}
