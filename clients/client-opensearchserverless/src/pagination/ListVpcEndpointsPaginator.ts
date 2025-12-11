// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListVpcEndpointsCommand,
  ListVpcEndpointsCommandInput,
  ListVpcEndpointsCommandOutput,
} from "../commands/ListVpcEndpointsCommand";
import { OpenSearchServerlessClient } from "../OpenSearchServerlessClient";
import { OpenSearchServerlessPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListVpcEndpoints: (
  config: OpenSearchServerlessPaginationConfiguration,
  input: ListVpcEndpointsCommandInput,
  ...rest: any[]
) => Paginator<ListVpcEndpointsCommandOutput> = createPaginator<
  OpenSearchServerlessPaginationConfiguration,
  ListVpcEndpointsCommandInput,
  ListVpcEndpointsCommandOutput
>(OpenSearchServerlessClient, ListVpcEndpointsCommand, "nextToken", "nextToken", "");
