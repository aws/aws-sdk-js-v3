// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListOriginEndpointsCommand,
  ListOriginEndpointsCommandInput,
  ListOriginEndpointsCommandOutput,
} from "../commands/ListOriginEndpointsCommand";
import { MediaPackageV2Client } from "../MediaPackageV2Client";
import { MediaPackageV2PaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListOriginEndpoints: (
  config: MediaPackageV2PaginationConfiguration,
  input: ListOriginEndpointsCommandInput,
  ...rest: any[]
) => Paginator<ListOriginEndpointsCommandOutput> = createPaginator<
  MediaPackageV2PaginationConfiguration,
  ListOriginEndpointsCommandInput,
  ListOriginEndpointsCommandOutput
>(MediaPackageV2Client, ListOriginEndpointsCommand, "NextToken", "NextToken", "MaxResults");
