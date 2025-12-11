// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListGatewaysCommand,
  ListGatewaysCommandInput,
  ListGatewaysCommandOutput,
} from "../commands/ListGatewaysCommand";
import { MediaConnectClient } from "../MediaConnectClient";
import { MediaConnectPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListGateways: (
  config: MediaConnectPaginationConfiguration,
  input: ListGatewaysCommandInput,
  ...rest: any[]
) => Paginator<ListGatewaysCommandOutput> = createPaginator<
  MediaConnectPaginationConfiguration,
  ListGatewaysCommandInput,
  ListGatewaysCommandOutput
>(MediaConnectClient, ListGatewaysCommand, "NextToken", "NextToken", "MaxResults");
