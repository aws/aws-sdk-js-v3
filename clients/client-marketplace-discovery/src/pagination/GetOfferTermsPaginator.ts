// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  GetOfferTermsCommand,
  GetOfferTermsCommandInput,
  GetOfferTermsCommandOutput,
} from "../commands/GetOfferTermsCommand";
import { MarketplaceDiscoveryClient } from "../MarketplaceDiscoveryClient";
import type { MarketplaceDiscoveryPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateGetOfferTerms: (
  config: MarketplaceDiscoveryPaginationConfiguration,
  input: GetOfferTermsCommandInput,
  ...rest: any[]
) => Paginator<GetOfferTermsCommandOutput> = createPaginator<
  MarketplaceDiscoveryPaginationConfiguration,
  GetOfferTermsCommandInput,
  GetOfferTermsCommandOutput
>(MarketplaceDiscoveryClient, GetOfferTermsCommand, "nextToken", "nextToken", "");
