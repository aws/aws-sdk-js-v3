// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import { Paginator } from "@smithy/types";

import { GetServersCommand, GetServersCommandInput, GetServersCommandOutput } from "../commands/GetServersCommand";
import { SMSClient } from "../SMSClient";
import { SMSPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateGetServers: (
  config: SMSPaginationConfiguration,
  input: GetServersCommandInput,
  ...rest: any[]
) => Paginator<GetServersCommandOutput> = createPaginator<
  SMSPaginationConfiguration,
  GetServersCommandInput,
  GetServersCommandOutput
>(SMSClient, GetServersCommand, "nextToken", "nextToken", "maxResults");
