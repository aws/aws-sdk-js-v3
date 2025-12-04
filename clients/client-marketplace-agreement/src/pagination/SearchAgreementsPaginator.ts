// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  SearchAgreementsCommand,
  SearchAgreementsCommandInput,
  SearchAgreementsCommandOutput,
} from "../commands/SearchAgreementsCommand";
import { MarketplaceAgreementClient } from "../MarketplaceAgreementClient";
import { MarketplaceAgreementPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateSearchAgreements: (
  config: MarketplaceAgreementPaginationConfiguration,
  input: SearchAgreementsCommandInput,
  ...rest: any[]
) => Paginator<SearchAgreementsCommandOutput> = createPaginator<
  MarketplaceAgreementPaginationConfiguration,
  SearchAgreementsCommandInput,
  SearchAgreementsCommandOutput
>(MarketplaceAgreementClient, SearchAgreementsCommand, "nextToken", "nextToken", "maxResults");
