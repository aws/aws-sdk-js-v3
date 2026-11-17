// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListAgreementApprovalsCommand,
  ListAgreementApprovalsCommandInput,
  ListAgreementApprovalsCommandOutput,
} from "../commands/ListAgreementApprovalsCommand";
import { MarketplaceAgreementClient } from "../MarketplaceAgreementClient";
import type { MarketplaceAgreementPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListAgreementApprovals: (
  config: MarketplaceAgreementPaginationConfiguration,
  input: ListAgreementApprovalsCommandInput,
  ...rest: any[]
) => Paginator<ListAgreementApprovalsCommandOutput> = createPaginator<
  MarketplaceAgreementPaginationConfiguration,
  ListAgreementApprovalsCommandInput,
  ListAgreementApprovalsCommandOutput
>(MarketplaceAgreementClient, ListAgreementApprovalsCommand, "nextToken", "nextToken", "maxResults");
