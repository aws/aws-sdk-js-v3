// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import { APIGatewayClient } from "../APIGatewayClient";
import {
  GetResourcesCommand,
  GetResourcesCommandInput,
  GetResourcesCommandOutput,
} from "../commands/GetResourcesCommand";
import { APIGatewayPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateGetResources: (
  config: APIGatewayPaginationConfiguration,
  input: GetResourcesCommandInput,
  ...rest: any[]
) => Paginator<GetResourcesCommandOutput> = createPaginator<
  APIGatewayPaginationConfiguration,
  GetResourcesCommandInput,
  GetResourcesCommandOutput
>(APIGatewayClient, GetResourcesCommand, "position", "position", "limit");
