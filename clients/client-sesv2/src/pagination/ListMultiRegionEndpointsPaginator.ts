// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import { Paginator } from "@smithy/types";

import {
  ListMultiRegionEndpointsCommand,
  ListMultiRegionEndpointsCommandInput,
  ListMultiRegionEndpointsCommandOutput,
} from "../commands/ListMultiRegionEndpointsCommand";
import { SESv2Client } from "../SESv2Client";
import { SESv2PaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListMultiRegionEndpoints: (
  config: SESv2PaginationConfiguration,
  input: ListMultiRegionEndpointsCommandInput,
  ...rest: any[]
) => Paginator<ListMultiRegionEndpointsCommandOutput> = createPaginator<
  SESv2PaginationConfiguration,
  ListMultiRegionEndpointsCommandInput,
  ListMultiRegionEndpointsCommandOutput
>(SESv2Client, ListMultiRegionEndpointsCommand, "NextToken", "NextToken", "PageSize");
