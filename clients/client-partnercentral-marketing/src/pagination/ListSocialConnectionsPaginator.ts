// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListSocialConnectionsCommand,
  ListSocialConnectionsCommandInput,
  ListSocialConnectionsCommandOutput,
} from "../commands/ListSocialConnectionsCommand";
import { PartnerCentralMarketingClient } from "../PartnerCentralMarketingClient";
import type { PartnerCentralMarketingPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListSocialConnections: (
  config: PartnerCentralMarketingPaginationConfiguration,
  input: ListSocialConnectionsCommandInput,
  ...rest: any[]
) => Paginator<ListSocialConnectionsCommandOutput> = createPaginator<
  PartnerCentralMarketingPaginationConfiguration,
  ListSocialConnectionsCommandInput,
  ListSocialConnectionsCommandOutput
>(PartnerCentralMarketingClient, ListSocialConnectionsCommand, "NextToken", "NextToken", "MaxResults");
