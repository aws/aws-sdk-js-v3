// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import { CloudFrontClient } from "../CloudFrontClient";
import {
  ListDistributionsCommand,
  ListDistributionsCommandInput,
  ListDistributionsCommandOutput,
} from "../commands/ListDistributionsCommand";
import { CloudFrontPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListDistributions: (
  config: CloudFrontPaginationConfiguration,
  input: ListDistributionsCommandInput,
  ...rest: any[]
) => Paginator<ListDistributionsCommandOutput> = createPaginator<
  CloudFrontPaginationConfiguration,
  ListDistributionsCommandInput,
  ListDistributionsCommandOutput
>(CloudFrontClient, ListDistributionsCommand, "Marker", "DistributionList.NextMarker", "MaxItems");
