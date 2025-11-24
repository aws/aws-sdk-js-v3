// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import { Paginator } from "@smithy/types";

import { CloudFrontClient } from "../CloudFrontClient";
import {
  ListDistributionsByConnectionFunctionCommand,
  ListDistributionsByConnectionFunctionCommandInput,
  ListDistributionsByConnectionFunctionCommandOutput,
} from "../commands/ListDistributionsByConnectionFunctionCommand";
import { CloudFrontPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListDistributionsByConnectionFunction: (
  config: CloudFrontPaginationConfiguration,
  input: ListDistributionsByConnectionFunctionCommandInput,
  ...rest: any[]
) => Paginator<ListDistributionsByConnectionFunctionCommandOutput> = createPaginator<
  CloudFrontPaginationConfiguration,
  ListDistributionsByConnectionFunctionCommandInput,
  ListDistributionsByConnectionFunctionCommandOutput
>(CloudFrontClient, ListDistributionsByConnectionFunctionCommand, "Marker", "DistributionList.NextMarker", "MaxItems");
