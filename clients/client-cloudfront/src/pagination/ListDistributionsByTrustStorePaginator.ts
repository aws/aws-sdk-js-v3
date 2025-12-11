// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import { CloudFrontClient } from "../CloudFrontClient";
import {
  ListDistributionsByTrustStoreCommand,
  ListDistributionsByTrustStoreCommandInput,
  ListDistributionsByTrustStoreCommandOutput,
} from "../commands/ListDistributionsByTrustStoreCommand";
import { CloudFrontPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListDistributionsByTrustStore: (
  config: CloudFrontPaginationConfiguration,
  input: ListDistributionsByTrustStoreCommandInput,
  ...rest: any[]
) => Paginator<ListDistributionsByTrustStoreCommandOutput> = createPaginator<
  CloudFrontPaginationConfiguration,
  ListDistributionsByTrustStoreCommandInput,
  ListDistributionsByTrustStoreCommandOutput
>(CloudFrontClient, ListDistributionsByTrustStoreCommand, "Marker", "DistributionList.NextMarker", "MaxItems");
