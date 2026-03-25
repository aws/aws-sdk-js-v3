// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListAgreementPaymentRequestsCommand,
  ListAgreementPaymentRequestsCommandInput,
  ListAgreementPaymentRequestsCommandOutput,
} from "../commands/ListAgreementPaymentRequestsCommand";
import { MarketplaceAgreementClient } from "../MarketplaceAgreementClient";
import { MarketplaceAgreementPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListAgreementPaymentRequests: (
  config: MarketplaceAgreementPaginationConfiguration,
  input: ListAgreementPaymentRequestsCommandInput,
  ...rest: any[]
) => Paginator<ListAgreementPaymentRequestsCommandOutput> = createPaginator<
  MarketplaceAgreementPaginationConfiguration,
  ListAgreementPaymentRequestsCommandInput,
  ListAgreementPaymentRequestsCommandOutput
>(MarketplaceAgreementClient, ListAgreementPaymentRequestsCommand, "nextToken", "nextToken", "maxResults");
