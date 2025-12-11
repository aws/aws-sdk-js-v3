// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListDevEndpointsCommand,
  ListDevEndpointsCommandInput,
  ListDevEndpointsCommandOutput,
} from "../commands/ListDevEndpointsCommand";
import { GlueClient } from "../GlueClient";
import { GluePaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListDevEndpoints: (
  config: GluePaginationConfiguration,
  input: ListDevEndpointsCommandInput,
  ...rest: any[]
) => Paginator<ListDevEndpointsCommandOutput> = createPaginator<
  GluePaginationConfiguration,
  ListDevEndpointsCommandInput,
  ListDevEndpointsCommandOutput
>(GlueClient, ListDevEndpointsCommand, "NextToken", "NextToken", "MaxResults");
