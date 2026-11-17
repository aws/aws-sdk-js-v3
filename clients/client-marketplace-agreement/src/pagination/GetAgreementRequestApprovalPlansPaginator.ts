// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  GetAgreementRequestApprovalPlansCommand,
  GetAgreementRequestApprovalPlansCommandInput,
  GetAgreementRequestApprovalPlansCommandOutput,
} from "../commands/GetAgreementRequestApprovalPlansCommand";
import { MarketplaceAgreementClient } from "../MarketplaceAgreementClient";
import type { MarketplaceAgreementPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateGetAgreementRequestApprovalPlans: (
  config: MarketplaceAgreementPaginationConfiguration,
  input: GetAgreementRequestApprovalPlansCommandInput,
  ...rest: any[]
) => Paginator<GetAgreementRequestApprovalPlansCommandOutput> = createPaginator<
  MarketplaceAgreementPaginationConfiguration,
  GetAgreementRequestApprovalPlansCommandInput,
  GetAgreementRequestApprovalPlansCommandOutput
>(MarketplaceAgreementClient, GetAgreementRequestApprovalPlansCommand, "nextToken", "nextToken", "maxResults");
