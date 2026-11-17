// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListAgreementRequestsCommand,
  ListAgreementRequestsCommandInput,
  ListAgreementRequestsCommandOutput,
} from "../commands/ListAgreementRequestsCommand";
import { MarketplaceAgreementClient } from "../MarketplaceAgreementClient";
import type { MarketplaceAgreementPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListAgreementRequests: (
  config: MarketplaceAgreementPaginationConfiguration,
  input: ListAgreementRequestsCommandInput,
  ...rest: any[]
) => Paginator<ListAgreementRequestsCommandOutput> = createPaginator<
  MarketplaceAgreementPaginationConfiguration,
  ListAgreementRequestsCommandInput,
  ListAgreementRequestsCommandOutput
>(MarketplaceAgreementClient, ListAgreementRequestsCommand, "nextToken", "nextToken", "maxResults");
