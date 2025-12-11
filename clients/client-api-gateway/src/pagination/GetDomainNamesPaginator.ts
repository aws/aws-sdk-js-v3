// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import { APIGatewayClient } from "../APIGatewayClient";
import {
  GetDomainNamesCommand,
  GetDomainNamesCommandInput,
  GetDomainNamesCommandOutput,
} from "../commands/GetDomainNamesCommand";
import { APIGatewayPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateGetDomainNames: (
  config: APIGatewayPaginationConfiguration,
  input: GetDomainNamesCommandInput,
  ...rest: any[]
) => Paginator<GetDomainNamesCommandOutput> = createPaginator<
  APIGatewayPaginationConfiguration,
  GetDomainNamesCommandInput,
  GetDomainNamesCommandOutput
>(APIGatewayClient, GetDomainNamesCommand, "position", "position", "limit");
