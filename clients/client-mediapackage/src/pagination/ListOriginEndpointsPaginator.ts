// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListOriginEndpointsCommand,
  ListOriginEndpointsCommandInput,
  ListOriginEndpointsCommandOutput,
} from "../commands/ListOriginEndpointsCommand";
import { MediaPackageClient } from "../MediaPackageClient";
import { MediaPackagePaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListOriginEndpoints: (
  config: MediaPackagePaginationConfiguration,
  input: ListOriginEndpointsCommandInput,
  ...rest: any[]
) => Paginator<ListOriginEndpointsCommandOutput> = createPaginator<
  MediaPackagePaginationConfiguration,
  ListOriginEndpointsCommandInput,
  ListOriginEndpointsCommandOutput
>(MediaPackageClient, ListOriginEndpointsCommand, "NextToken", "NextToken", "MaxResults");
