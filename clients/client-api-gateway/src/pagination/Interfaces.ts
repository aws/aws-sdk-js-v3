import { APIGateway } from "../APIGateway";
import { APIGatewayClient } from "../APIGatewayClient";
import { PaginationConfiguration } from "@aws-sdk/types";

export interface APIGatewayPaginationConfiguration extends PaginationConfiguration {
  client: APIGateway | APIGatewayClient;
}
