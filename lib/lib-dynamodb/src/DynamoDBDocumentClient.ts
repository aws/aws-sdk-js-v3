import { DynamoDBClient } from "@aws-sdk/client-dynamodb";

export class DynamoDBDocumentClient {
  static from(client: DynamoDBClient) {
    return client;
  }
}
