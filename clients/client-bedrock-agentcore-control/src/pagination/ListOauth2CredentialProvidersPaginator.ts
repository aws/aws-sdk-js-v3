// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import { BedrockAgentCoreControlClient } from "../BedrockAgentCoreControlClient";
import {
  ListOauth2CredentialProvidersCommand,
  ListOauth2CredentialProvidersCommandInput,
  ListOauth2CredentialProvidersCommandOutput,
} from "../commands/ListOauth2CredentialProvidersCommand";
import { BedrockAgentCoreControlPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListOauth2CredentialProviders: (
  config: BedrockAgentCoreControlPaginationConfiguration,
  input: ListOauth2CredentialProvidersCommandInput,
  ...rest: any[]
) => Paginator<ListOauth2CredentialProvidersCommandOutput> = createPaginator<
  BedrockAgentCoreControlPaginationConfiguration,
  ListOauth2CredentialProvidersCommandInput,
  ListOauth2CredentialProvidersCommandOutput
>(BedrockAgentCoreControlClient, ListOauth2CredentialProvidersCommand, "nextToken", "nextToken", "maxResults");
