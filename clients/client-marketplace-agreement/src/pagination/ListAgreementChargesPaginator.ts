// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListAgreementChargesCommand,
  ListAgreementChargesCommandInput,
  ListAgreementChargesCommandOutput,
} from "../commands/ListAgreementChargesCommand";
import { MarketplaceAgreementClient } from "../MarketplaceAgreementClient";
import type { MarketplaceAgreementPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListAgreementCharges: (
  config: MarketplaceAgreementPaginationConfiguration,
  input: ListAgreementChargesCommandInput,
  ...rest: any[]
) => Paginator<ListAgreementChargesCommandOutput> = createPaginator<
  MarketplaceAgreementPaginationConfiguration,
  ListAgreementChargesCommandInput,
  ListAgreementChargesCommandOutput
>(MarketplaceAgreementClient, ListAgreementChargesCommand, "nextToken", "nextToken", "maxResults");
