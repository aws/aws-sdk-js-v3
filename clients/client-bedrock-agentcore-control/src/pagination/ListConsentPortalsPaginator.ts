// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import { BedrockAgentCoreControlClient } from "../BedrockAgentCoreControlClient";
import {
  ListConsentPortalsCommand,
  ListConsentPortalsCommandInput,
  ListConsentPortalsCommandOutput,
} from "../commands/ListConsentPortalsCommand";
import type { BedrockAgentCoreControlPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListConsentPortals: (
  config: BedrockAgentCoreControlPaginationConfiguration,
  input: ListConsentPortalsCommandInput,
  ...rest: any[]
) => Paginator<ListConsentPortalsCommandOutput> = createPaginator<
  BedrockAgentCoreControlPaginationConfiguration,
  ListConsentPortalsCommandInput,
  ListConsentPortalsCommandOutput
>(BedrockAgentCoreControlClient, ListConsentPortalsCommand, "nextToken", "nextToken", "maxResults");
