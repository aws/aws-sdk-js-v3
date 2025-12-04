// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import { APIGatewayClient } from "../APIGatewayClient";
import {
  GetBasePathMappingsCommand,
  GetBasePathMappingsCommandInput,
  GetBasePathMappingsCommandOutput,
} from "../commands/GetBasePathMappingsCommand";
import { APIGatewayPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateGetBasePathMappings: (
  config: APIGatewayPaginationConfiguration,
  input: GetBasePathMappingsCommandInput,
  ...rest: any[]
) => Paginator<GetBasePathMappingsCommandOutput> = createPaginator<
  APIGatewayPaginationConfiguration,
  GetBasePathMappingsCommandInput,
  GetBasePathMappingsCommandOutput
>(APIGatewayClient, GetBasePathMappingsCommand, "position", "position", "limit");
