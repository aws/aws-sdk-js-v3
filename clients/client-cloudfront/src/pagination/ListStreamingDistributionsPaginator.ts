// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import { CloudFrontClient } from "../CloudFrontClient";
import {
  ListStreamingDistributionsCommand,
  ListStreamingDistributionsCommandInput,
  ListStreamingDistributionsCommandOutput,
} from "../commands/ListStreamingDistributionsCommand";
import { CloudFrontPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListStreamingDistributions: (
  config: CloudFrontPaginationConfiguration,
  input: ListStreamingDistributionsCommandInput,
  ...rest: any[]
) => Paginator<ListStreamingDistributionsCommandOutput> = createPaginator<
  CloudFrontPaginationConfiguration,
  ListStreamingDistributionsCommandInput,
  ListStreamingDistributionsCommandOutput
>(CloudFrontClient, ListStreamingDistributionsCommand, "Marker", "StreamingDistributionList.NextMarker", "MaxItems");
