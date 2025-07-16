// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import { Paginator } from "@smithy/types";

import { BedrockAgentCoreControlClient } from "../BedrockAgentCoreControlClient";
import {
  ListApiKeyCredentialProvidersCommand,
  ListApiKeyCredentialProvidersCommandInput,
  ListApiKeyCredentialProvidersCommandOutput,
} from "../commands/ListApiKeyCredentialProvidersCommand";
import { BedrockAgentCoreControlPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListApiKeyCredentialProviders: (
  config: BedrockAgentCoreControlPaginationConfiguration,
  input: ListApiKeyCredentialProvidersCommandInput,
  ...rest: any[]
) => Paginator<ListApiKeyCredentialProvidersCommandOutput> = createPaginator<
  BedrockAgentCoreControlPaginationConfiguration,
  ListApiKeyCredentialProvidersCommandInput,
  ListApiKeyCredentialProvidersCommandOutput
>(BedrockAgentCoreControlClient, ListApiKeyCredentialProvidersCommand, "nextToken", "nextToken", "maxResults");
