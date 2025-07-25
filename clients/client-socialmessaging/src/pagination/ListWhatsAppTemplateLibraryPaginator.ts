// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import { Paginator } from "@smithy/types";

import {
  ListWhatsAppTemplateLibraryCommand,
  ListWhatsAppTemplateLibraryCommandInput,
  ListWhatsAppTemplateLibraryCommandOutput,
} from "../commands/ListWhatsAppTemplateLibraryCommand";
import { SocialMessagingClient } from "../SocialMessagingClient";
import { SocialMessagingPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListWhatsAppTemplateLibrary: (
  config: SocialMessagingPaginationConfiguration,
  input: ListWhatsAppTemplateLibraryCommandInput,
  ...rest: any[]
) => Paginator<ListWhatsAppTemplateLibraryCommandOutput> = createPaginator<
  SocialMessagingPaginationConfiguration,
  ListWhatsAppTemplateLibraryCommandInput,
  ListWhatsAppTemplateLibraryCommandOutput
>(SocialMessagingClient, ListWhatsAppTemplateLibraryCommand, "nextToken", "nextToken", "maxResults");
