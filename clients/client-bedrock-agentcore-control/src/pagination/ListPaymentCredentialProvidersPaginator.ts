// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import { BedrockAgentCoreControlClient } from "../BedrockAgentCoreControlClient";
import {
  ListPaymentCredentialProvidersCommand,
  ListPaymentCredentialProvidersCommandInput,
  ListPaymentCredentialProvidersCommandOutput,
} from "../commands/ListPaymentCredentialProvidersCommand";
import type { BedrockAgentCoreControlPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListPaymentCredentialProviders: (
  config: BedrockAgentCoreControlPaginationConfiguration,
  input: ListPaymentCredentialProvidersCommandInput,
  ...rest: any[]
) => Paginator<ListPaymentCredentialProvidersCommandOutput> = createPaginator<
  BedrockAgentCoreControlPaginationConfiguration,
  ListPaymentCredentialProvidersCommandInput,
  ListPaymentCredentialProvidersCommandOutput
>(BedrockAgentCoreControlClient, ListPaymentCredentialProvidersCommand, "nextToken", "nextToken", "maxResults");
