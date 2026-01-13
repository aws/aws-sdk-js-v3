// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListCommitmentPurchaseAnalysesCommand,
  ListCommitmentPurchaseAnalysesCommandInput,
  ListCommitmentPurchaseAnalysesCommandOutput,
} from "../commands/ListCommitmentPurchaseAnalysesCommand";
import { CostExplorerClient } from "../CostExplorerClient";
import { CostExplorerPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListCommitmentPurchaseAnalyses: (
  config: CostExplorerPaginationConfiguration,
  input: ListCommitmentPurchaseAnalysesCommandInput,
  ...rest: any[]
) => Paginator<ListCommitmentPurchaseAnalysesCommandOutput> = createPaginator<
  CostExplorerPaginationConfiguration,
  ListCommitmentPurchaseAnalysesCommandInput,
  ListCommitmentPurchaseAnalysesCommandOutput
>(CostExplorerClient, ListCommitmentPurchaseAnalysesCommand, "NextPageToken", "NextPageToken", "PageSize");
