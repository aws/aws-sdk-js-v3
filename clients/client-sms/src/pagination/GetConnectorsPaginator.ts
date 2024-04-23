// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import { Paginator } from "@smithy/types";

import {
  GetConnectorsCommand,
  GetConnectorsCommandInput,
  GetConnectorsCommandOutput,
} from "../commands/GetConnectorsCommand";
import { SMSClient } from "../SMSClient";
import { SMSPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateGetConnectors: (
  config: SMSPaginationConfiguration,
  input: GetConnectorsCommandInput,
  ...rest: any[]
) => Paginator<GetConnectorsCommandOutput> = createPaginator<
  SMSPaginationConfiguration,
  GetConnectorsCommandInput,
  GetConnectorsCommandOutput
>(SMSClient, GetConnectorsCommand, "nextToken", "nextToken", "maxResults");
