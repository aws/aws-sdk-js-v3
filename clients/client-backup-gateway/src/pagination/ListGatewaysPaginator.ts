// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import { BackupGatewayClient } from "../BackupGatewayClient";
import {
  ListGatewaysCommand,
  ListGatewaysCommandInput,
  ListGatewaysCommandOutput,
} from "../commands/ListGatewaysCommand";
import { BackupGatewayPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListGateways: (
  config: BackupGatewayPaginationConfiguration,
  input: ListGatewaysCommandInput,
  ...rest: any[]
) => Paginator<ListGatewaysCommandOutput> = createPaginator<
  BackupGatewayPaginationConfiguration,
  ListGatewaysCommandInput,
  ListGatewaysCommandOutput
>(BackupGatewayClient, ListGatewaysCommand, "NextToken", "NextToken", "MaxResults");
