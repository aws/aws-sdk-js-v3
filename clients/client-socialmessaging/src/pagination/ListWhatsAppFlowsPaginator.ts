// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListWhatsAppFlowsCommand,
  ListWhatsAppFlowsCommandInput,
  ListWhatsAppFlowsCommandOutput,
} from "../commands/ListWhatsAppFlowsCommand";
import { SocialMessagingClient } from "../SocialMessagingClient";
import type { SocialMessagingPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListWhatsAppFlows: (
  config: SocialMessagingPaginationConfiguration,
  input: ListWhatsAppFlowsCommandInput,
  ...rest: any[]
) => Paginator<ListWhatsAppFlowsCommandOutput> = createPaginator<
  SocialMessagingPaginationConfiguration,
  ListWhatsAppFlowsCommandInput,
  ListWhatsAppFlowsCommandOutput
>(SocialMessagingClient, ListWhatsAppFlowsCommand, "nextToken", "nextToken", "maxResults");
