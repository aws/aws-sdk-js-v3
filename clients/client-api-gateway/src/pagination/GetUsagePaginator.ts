// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import { APIGatewayClient } from "../APIGatewayClient";
import { GetUsageCommand, GetUsageCommandInput, GetUsageCommandOutput } from "../commands/GetUsageCommand";
import { APIGatewayPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateGetUsage: (
  config: APIGatewayPaginationConfiguration,
  input: GetUsageCommandInput,
  ...rest: any[]
) => Paginator<GetUsageCommandOutput> = createPaginator<
  APIGatewayPaginationConfiguration,
  GetUsageCommandInput,
  GetUsageCommandOutput
>(APIGatewayClient, GetUsageCommand, "position", "position", "limit");
