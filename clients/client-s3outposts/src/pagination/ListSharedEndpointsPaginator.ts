// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListSharedEndpointsCommand,
  ListSharedEndpointsCommandInput,
  ListSharedEndpointsCommandOutput,
} from "../commands/ListSharedEndpointsCommand";
import { S3OutpostsClient } from "../S3OutpostsClient";
import { S3OutpostsPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListSharedEndpoints: (
  config: S3OutpostsPaginationConfiguration,
  input: ListSharedEndpointsCommandInput,
  ...rest: any[]
) => Paginator<ListSharedEndpointsCommandOutput> = createPaginator<
  S3OutpostsPaginationConfiguration,
  ListSharedEndpointsCommandInput,
  ListSharedEndpointsCommandOutput
>(S3OutpostsClient, ListSharedEndpointsCommand, "NextToken", "NextToken", "MaxResults");
