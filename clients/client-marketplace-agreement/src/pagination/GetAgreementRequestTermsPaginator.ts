// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  GetAgreementRequestTermsCommand,
  GetAgreementRequestTermsCommandInput,
  GetAgreementRequestTermsCommandOutput,
} from "../commands/GetAgreementRequestTermsCommand";
import { MarketplaceAgreementClient } from "../MarketplaceAgreementClient";
import type { MarketplaceAgreementPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateGetAgreementRequestTerms: (
  config: MarketplaceAgreementPaginationConfiguration,
  input: GetAgreementRequestTermsCommandInput,
  ...rest: any[]
) => Paginator<GetAgreementRequestTermsCommandOutput> = createPaginator<
  MarketplaceAgreementPaginationConfiguration,
  GetAgreementRequestTermsCommandInput,
  GetAgreementRequestTermsCommandOutput
>(MarketplaceAgreementClient, GetAgreementRequestTermsCommand, "nextToken", "nextToken", "maxResults");
