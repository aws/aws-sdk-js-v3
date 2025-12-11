// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListGatewayInstancesCommand,
  ListGatewayInstancesCommandInput,
  ListGatewayInstancesCommandOutput,
} from "../commands/ListGatewayInstancesCommand";
import { MediaConnectClient } from "../MediaConnectClient";
import { MediaConnectPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListGatewayInstances: (
  config: MediaConnectPaginationConfiguration,
  input: ListGatewayInstancesCommandInput,
  ...rest: any[]
) => Paginator<ListGatewayInstancesCommandOutput> = createPaginator<
  MediaConnectPaginationConfiguration,
  ListGatewayInstancesCommandInput,
  ListGatewayInstancesCommandOutput
>(MediaConnectClient, ListGatewayInstancesCommand, "NextToken", "NextToken", "MaxResults");
