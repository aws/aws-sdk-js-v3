// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import { APIGatewayClient } from "../APIGatewayClient";
import { GetApiKeysCommand, GetApiKeysCommandInput, GetApiKeysCommandOutput } from "../commands/GetApiKeysCommand";
import { APIGatewayPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateGetApiKeys: (
  config: APIGatewayPaginationConfiguration,
  input: GetApiKeysCommandInput,
  ...rest: any[]
) => Paginator<GetApiKeysCommandOutput> = createPaginator<
  APIGatewayPaginationConfiguration,
  GetApiKeysCommandInput,
  GetApiKeysCommandOutput
>(APIGatewayClient, GetApiKeysCommand, "position", "position", "limit");
