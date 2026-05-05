// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  GetAgreementEntitlementsCommand,
  GetAgreementEntitlementsCommandInput,
  GetAgreementEntitlementsCommandOutput,
} from "../commands/GetAgreementEntitlementsCommand";
import { MarketplaceAgreementClient } from "../MarketplaceAgreementClient";
import type { MarketplaceAgreementPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateGetAgreementEntitlements: (
  config: MarketplaceAgreementPaginationConfiguration,
  input: GetAgreementEntitlementsCommandInput,
  ...rest: any[]
) => Paginator<GetAgreementEntitlementsCommandOutput> = createPaginator<
  MarketplaceAgreementPaginationConfiguration,
  GetAgreementEntitlementsCommandInput,
  GetAgreementEntitlementsCommandOutput
>(MarketplaceAgreementClient, GetAgreementEntitlementsCommand, "nextToken", "nextToken", "maxResults");
