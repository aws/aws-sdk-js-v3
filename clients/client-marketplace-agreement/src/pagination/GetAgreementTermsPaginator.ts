// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  GetAgreementTermsCommand,
  GetAgreementTermsCommandInput,
  GetAgreementTermsCommandOutput,
} from "../commands/GetAgreementTermsCommand";
import { MarketplaceAgreementClient } from "../MarketplaceAgreementClient";
import { MarketplaceAgreementPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateGetAgreementTerms: (
  config: MarketplaceAgreementPaginationConfiguration,
  input: GetAgreementTermsCommandInput,
  ...rest: any[]
) => Paginator<GetAgreementTermsCommandOutput> = createPaginator<
  MarketplaceAgreementPaginationConfiguration,
  GetAgreementTermsCommandInput,
  GetAgreementTermsCommandOutput
>(MarketplaceAgreementClient, GetAgreementTermsCommand, "nextToken", "nextToken", "maxResults");
