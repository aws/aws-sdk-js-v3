// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import { BedrockAgentCoreControlClient } from "../BedrockAgentCoreControlClient";
import {
  ListGatewaysCommand,
  ListGatewaysCommandInput,
  ListGatewaysCommandOutput,
} from "../commands/ListGatewaysCommand";
import { BedrockAgentCoreControlPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListGateways: (
  config: BedrockAgentCoreControlPaginationConfiguration,
  input: ListGatewaysCommandInput,
  ...rest: any[]
) => Paginator<ListGatewaysCommandOutput> = createPaginator<
  BedrockAgentCoreControlPaginationConfiguration,
  ListGatewaysCommandInput,
  ListGatewaysCommandOutput
>(BedrockAgentCoreControlClient, ListGatewaysCommand, "nextToken", "nextToken", "maxResults");
