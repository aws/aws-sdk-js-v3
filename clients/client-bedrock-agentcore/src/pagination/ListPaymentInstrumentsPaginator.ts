// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import { BedrockAgentCoreClient } from "../BedrockAgentCoreClient";
import {
  ListPaymentInstrumentsCommand,
  ListPaymentInstrumentsCommandInput,
  ListPaymentInstrumentsCommandOutput,
} from "../commands/ListPaymentInstrumentsCommand";
import type { BedrockAgentCorePaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListPaymentInstruments: (
  config: BedrockAgentCorePaginationConfiguration,
  input: ListPaymentInstrumentsCommandInput,
  ...rest: any[]
) => Paginator<ListPaymentInstrumentsCommandOutput> = createPaginator<
  BedrockAgentCorePaginationConfiguration,
  ListPaymentInstrumentsCommandInput,
  ListPaymentInstrumentsCommandOutput
>(BedrockAgentCoreClient, ListPaymentInstrumentsCommand, "nextToken", "nextToken", "maxResults");
