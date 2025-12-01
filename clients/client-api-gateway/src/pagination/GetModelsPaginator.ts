// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import { APIGatewayClient } from "../APIGatewayClient";
import { GetModelsCommand, GetModelsCommandInput, GetModelsCommandOutput } from "../commands/GetModelsCommand";
import { APIGatewayPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateGetModels: (
  config: APIGatewayPaginationConfiguration,
  input: GetModelsCommandInput,
  ...rest: any[]
) => Paginator<GetModelsCommandOutput> = createPaginator<
  APIGatewayPaginationConfiguration,
  GetModelsCommandInput,
  GetModelsCommandOutput
>(APIGatewayClient, GetModelsCommand, "position", "position", "limit");
