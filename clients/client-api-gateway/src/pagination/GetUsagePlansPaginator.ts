// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import { APIGatewayClient } from "../APIGatewayClient";
import {
  GetUsagePlansCommand,
  GetUsagePlansCommandInput,
  GetUsagePlansCommandOutput,
} from "../commands/GetUsagePlansCommand";
import { APIGatewayPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateGetUsagePlans: (
  config: APIGatewayPaginationConfiguration,
  input: GetUsagePlansCommandInput,
  ...rest: any[]
) => Paginator<GetUsagePlansCommandOutput> = createPaginator<
  APIGatewayPaginationConfiguration,
  GetUsagePlansCommandInput,
  GetUsagePlansCommandOutput
>(APIGatewayClient, GetUsagePlansCommand, "position", "position", "limit");
