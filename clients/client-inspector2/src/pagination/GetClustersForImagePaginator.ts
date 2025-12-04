// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  GetClustersForImageCommand,
  GetClustersForImageCommandInput,
  GetClustersForImageCommandOutput,
} from "../commands/GetClustersForImageCommand";
import { Inspector2Client } from "../Inspector2Client";
import { Inspector2PaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateGetClustersForImage: (
  config: Inspector2PaginationConfiguration,
  input: GetClustersForImageCommandInput,
  ...rest: any[]
) => Paginator<GetClustersForImageCommandOutput> = createPaginator<
  Inspector2PaginationConfiguration,
  GetClustersForImageCommandInput,
  GetClustersForImageCommandOutput
>(Inspector2Client, GetClustersForImageCommand, "nextToken", "nextToken", "maxResults");
