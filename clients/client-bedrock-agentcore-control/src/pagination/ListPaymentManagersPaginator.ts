// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import { BedrockAgentCoreControlClient } from "../BedrockAgentCoreControlClient";
import {
  ListPaymentManagersCommand,
  ListPaymentManagersCommandInput,
  ListPaymentManagersCommandOutput,
} from "../commands/ListPaymentManagersCommand";
import type { BedrockAgentCoreControlPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListPaymentManagers: (
  config: BedrockAgentCoreControlPaginationConfiguration,
  input: ListPaymentManagersCommandInput,
  ...rest: any[]
) => Paginator<ListPaymentManagersCommandOutput> = createPaginator<
  BedrockAgentCoreControlPaginationConfiguration,
  ListPaymentManagersCommandInput,
  ListPaymentManagersCommandOutput
>(BedrockAgentCoreControlClient, ListPaymentManagersCommand, "nextToken", "nextToken", "maxResults");
