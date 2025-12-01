// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListEndpointsCommand,
  ListEndpointsCommandInput,
  ListEndpointsCommandOutput,
} from "../commands/ListEndpointsCommand";
import { ComprehendClient } from "../ComprehendClient";
import { ComprehendPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListEndpoints: (
  config: ComprehendPaginationConfiguration,
  input: ListEndpointsCommandInput,
  ...rest: any[]
) => Paginator<ListEndpointsCommandOutput> = createPaginator<
  ComprehendPaginationConfiguration,
  ListEndpointsCommandInput,
  ListEndpointsCommandOutput
>(ComprehendClient, ListEndpointsCommand, "NextToken", "NextToken", "MaxResults");
