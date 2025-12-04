// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import { APIGatewayClient } from "../APIGatewayClient";
import {
  GetClientCertificatesCommand,
  GetClientCertificatesCommandInput,
  GetClientCertificatesCommandOutput,
} from "../commands/GetClientCertificatesCommand";
import { APIGatewayPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateGetClientCertificates: (
  config: APIGatewayPaginationConfiguration,
  input: GetClientCertificatesCommandInput,
  ...rest: any[]
) => Paginator<GetClientCertificatesCommandOutput> = createPaginator<
  APIGatewayPaginationConfiguration,
  GetClientCertificatesCommandInput,
  GetClientCertificatesCommandOutput
>(APIGatewayClient, GetClientCertificatesCommand, "position", "position", "limit");
