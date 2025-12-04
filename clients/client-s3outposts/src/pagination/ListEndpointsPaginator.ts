// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListEndpointsCommand,
  ListEndpointsCommandInput,
  ListEndpointsCommandOutput,
} from "../commands/ListEndpointsCommand";
import { S3OutpostsClient } from "../S3OutpostsClient";
import { S3OutpostsPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListEndpoints: (
  config: S3OutpostsPaginationConfiguration,
  input: ListEndpointsCommandInput,
  ...rest: any[]
) => Paginator<ListEndpointsCommandOutput> = createPaginator<
  S3OutpostsPaginationConfiguration,
  ListEndpointsCommandInput,
  ListEndpointsCommandOutput
>(S3OutpostsClient, ListEndpointsCommand, "NextToken", "NextToken", "MaxResults");
