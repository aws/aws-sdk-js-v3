// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import { APIGatewayClient } from "../APIGatewayClient";
import {
  GetDeploymentsCommand,
  GetDeploymentsCommandInput,
  GetDeploymentsCommandOutput,
} from "../commands/GetDeploymentsCommand";
import { APIGatewayPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateGetDeployments: (
  config: APIGatewayPaginationConfiguration,
  input: GetDeploymentsCommandInput,
  ...rest: any[]
) => Paginator<GetDeploymentsCommandOutput> = createPaginator<
  APIGatewayPaginationConfiguration,
  GetDeploymentsCommandInput,
  GetDeploymentsCommandOutput
>(APIGatewayClient, GetDeploymentsCommand, "position", "position", "limit");
