// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import { BedrockAgentCoreControlClient } from "../BedrockAgentCoreControlClient";
import {
  ListPaymentConnectorsCommand,
  ListPaymentConnectorsCommandInput,
  ListPaymentConnectorsCommandOutput,
} from "../commands/ListPaymentConnectorsCommand";
import type { BedrockAgentCoreControlPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListPaymentConnectors: (
  config: BedrockAgentCoreControlPaginationConfiguration,
  input: ListPaymentConnectorsCommandInput,
  ...rest: any[]
) => Paginator<ListPaymentConnectorsCommandOutput> = createPaginator<
  BedrockAgentCoreControlPaginationConfiguration,
  ListPaymentConnectorsCommandInput,
  ListPaymentConnectorsCommandOutput
>(BedrockAgentCoreControlClient, ListPaymentConnectorsCommand, "nextToken", "nextToken", "maxResults");
