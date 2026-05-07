// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import { BedrockAgentCoreClient } from "../BedrockAgentCoreClient";
import {
  ListPaymentSessionsCommand,
  ListPaymentSessionsCommandInput,
  ListPaymentSessionsCommandOutput,
} from "../commands/ListPaymentSessionsCommand";
import type { BedrockAgentCorePaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListPaymentSessions: (
  config: BedrockAgentCorePaginationConfiguration,
  input: ListPaymentSessionsCommandInput,
  ...rest: any[]
) => Paginator<ListPaymentSessionsCommandOutput> = createPaginator<
  BedrockAgentCorePaginationConfiguration,
  ListPaymentSessionsCommandInput,
  ListPaymentSessionsCommandOutput
>(BedrockAgentCoreClient, ListPaymentSessionsCommand, "nextToken", "nextToken", "maxResults");
