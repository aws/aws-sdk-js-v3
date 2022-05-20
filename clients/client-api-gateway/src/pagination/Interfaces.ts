// smithy-typescript generated code
import { PaginationConfiguration } from "@aws-sdk/types";

import { APIGateway } from "../APIGateway";
import { APIGatewayClient } from "../APIGatewayClient";

export interface APIGatewayPaginationConfiguration extends PaginationConfiguration {
  client: APIGateway | APIGatewayClient;
}
