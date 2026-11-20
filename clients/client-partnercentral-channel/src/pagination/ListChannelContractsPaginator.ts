// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListChannelContractsCommand,
  ListChannelContractsCommandInput,
  ListChannelContractsCommandOutput,
} from "../commands/ListChannelContractsCommand";
import { PartnerCentralChannelClient } from "../PartnerCentralChannelClient";
import type { PartnerCentralChannelPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListChannelContracts: (
  config: PartnerCentralChannelPaginationConfiguration,
  input: ListChannelContractsCommandInput,
  ...rest: any[]
) => Paginator<ListChannelContractsCommandOutput> = createPaginator<
  PartnerCentralChannelPaginationConfiguration,
  ListChannelContractsCommandInput,
  ListChannelContractsCommandOutput
>(PartnerCentralChannelClient, ListChannelContractsCommand, "nextToken", "nextToken", "maxResults");
