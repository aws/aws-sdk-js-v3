// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import { Paginator } from "@smithy/types";

import { CloudFrontClient } from "../CloudFrontClient";
import {
  ListDistributionsByConnectionModeCommand,
  ListDistributionsByConnectionModeCommandInput,
  ListDistributionsByConnectionModeCommandOutput,
} from "../commands/ListDistributionsByConnectionModeCommand";
import { CloudFrontPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListDistributionsByConnectionMode: (
  config: CloudFrontPaginationConfiguration,
  input: ListDistributionsByConnectionModeCommandInput,
  ...rest: any[]
) => Paginator<ListDistributionsByConnectionModeCommandOutput> = createPaginator<
  CloudFrontPaginationConfiguration,
  ListDistributionsByConnectionModeCommandInput,
  ListDistributionsByConnectionModeCommandOutput
>(CloudFrontClient, ListDistributionsByConnectionModeCommand, "Marker", "DistributionList.NextMarker", "MaxItems");
