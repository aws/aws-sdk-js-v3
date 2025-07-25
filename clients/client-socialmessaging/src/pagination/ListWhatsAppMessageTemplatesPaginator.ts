// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import { Paginator } from "@smithy/types";

import {
  ListWhatsAppMessageTemplatesCommand,
  ListWhatsAppMessageTemplatesCommandInput,
  ListWhatsAppMessageTemplatesCommandOutput,
} from "../commands/ListWhatsAppMessageTemplatesCommand";
import { SocialMessagingClient } from "../SocialMessagingClient";
import { SocialMessagingPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListWhatsAppMessageTemplates: (
  config: SocialMessagingPaginationConfiguration,
  input: ListWhatsAppMessageTemplatesCommandInput,
  ...rest: any[]
) => Paginator<ListWhatsAppMessageTemplatesCommandOutput> = createPaginator<
  SocialMessagingPaginationConfiguration,
  ListWhatsAppMessageTemplatesCommandInput,
  ListWhatsAppMessageTemplatesCommandOutput
>(SocialMessagingClient, ListWhatsAppMessageTemplatesCommand, "nextToken", "nextToken", "maxResults");
