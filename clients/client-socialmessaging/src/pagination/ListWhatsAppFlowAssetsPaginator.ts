// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListWhatsAppFlowAssetsCommand,
  ListWhatsAppFlowAssetsCommandInput,
  ListWhatsAppFlowAssetsCommandOutput,
} from "../commands/ListWhatsAppFlowAssetsCommand";
import { SocialMessagingClient } from "../SocialMessagingClient";
import type { SocialMessagingPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListWhatsAppFlowAssets: (
  config: SocialMessagingPaginationConfiguration,
  input: ListWhatsAppFlowAssetsCommandInput,
  ...rest: any[]
) => Paginator<ListWhatsAppFlowAssetsCommandOutput> = createPaginator<
  SocialMessagingPaginationConfiguration,
  ListWhatsAppFlowAssetsCommandInput,
  ListWhatsAppFlowAssetsCommandOutput
>(SocialMessagingClient, ListWhatsAppFlowAssetsCommand, "nextToken", "nextToken", "maxResults");
