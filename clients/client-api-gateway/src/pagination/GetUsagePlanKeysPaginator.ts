// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import { APIGatewayClient } from "../APIGatewayClient";
import {
  GetUsagePlanKeysCommand,
  GetUsagePlanKeysCommandInput,
  GetUsagePlanKeysCommandOutput,
} from "../commands/GetUsagePlanKeysCommand";
import { APIGatewayPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateGetUsagePlanKeys: (
  config: APIGatewayPaginationConfiguration,
  input: GetUsagePlanKeysCommandInput,
  ...rest: any[]
) => Paginator<GetUsagePlanKeysCommandOutput> = createPaginator<
  APIGatewayPaginationConfiguration,
  GetUsagePlanKeysCommandInput,
  GetUsagePlanKeysCommandOutput
>(APIGatewayClient, GetUsagePlanKeysCommand, "position", "position", "limit");
