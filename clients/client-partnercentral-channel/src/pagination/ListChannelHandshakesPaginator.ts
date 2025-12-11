// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListChannelHandshakesCommand,
  ListChannelHandshakesCommandInput,
  ListChannelHandshakesCommandOutput,
} from "../commands/ListChannelHandshakesCommand";
import { PartnerCentralChannelClient } from "../PartnerCentralChannelClient";
import { PartnerCentralChannelPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListChannelHandshakes: (
  config: PartnerCentralChannelPaginationConfiguration,
  input: ListChannelHandshakesCommandInput,
  ...rest: any[]
) => Paginator<ListChannelHandshakesCommandOutput> = createPaginator<
  PartnerCentralChannelPaginationConfiguration,
  ListChannelHandshakesCommandInput,
  ListChannelHandshakesCommandOutput
>(PartnerCentralChannelClient, ListChannelHandshakesCommand, "nextToken", "nextToken", "maxResults");
