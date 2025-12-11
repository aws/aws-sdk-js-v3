// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import { APIGatewayClient } from "../APIGatewayClient";
import { GetVpcLinksCommand, GetVpcLinksCommandInput, GetVpcLinksCommandOutput } from "../commands/GetVpcLinksCommand";
import { APIGatewayPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateGetVpcLinks: (
  config: APIGatewayPaginationConfiguration,
  input: GetVpcLinksCommandInput,
  ...rest: any[]
) => Paginator<GetVpcLinksCommandOutput> = createPaginator<
  APIGatewayPaginationConfiguration,
  GetVpcLinksCommandInput,
  GetVpcLinksCommandOutput
>(APIGatewayClient, GetVpcLinksCommand, "position", "position", "limit");
