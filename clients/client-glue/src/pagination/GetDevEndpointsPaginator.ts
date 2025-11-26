// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  GetDevEndpointsCommand,
  GetDevEndpointsCommandInput,
  GetDevEndpointsCommandOutput,
} from "../commands/GetDevEndpointsCommand";
import { GlueClient } from "../GlueClient";
import { GluePaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateGetDevEndpoints: (
  config: GluePaginationConfiguration,
  input: GetDevEndpointsCommandInput,
  ...rest: any[]
) => Paginator<GetDevEndpointsCommandOutput> = createPaginator<
  GluePaginationConfiguration,
  GetDevEndpointsCommandInput,
  GetDevEndpointsCommandOutput
>(GlueClient, GetDevEndpointsCommand, "NextToken", "NextToken", "MaxResults");
