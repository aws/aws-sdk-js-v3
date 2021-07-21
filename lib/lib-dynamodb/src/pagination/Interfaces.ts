import { DynamoDBDocument } from "../DynamoDBDocument";
import { DynamoDBDocumentClient } from "../DynamoDBDocumentClient";
import { PaginationConfiguration } from "@aws-sdk/types";

export interface DynamoDBDocumentPaginationConfiguration extends PaginationConfiguration {
  client: DynamoDBDocument | DynamoDBDocumentClient;
}
