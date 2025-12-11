// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import { ChimeSDKIdentityClient } from "../ChimeSDKIdentityClient";
import {
  ListAppInstanceUserEndpointsCommand,
  ListAppInstanceUserEndpointsCommandInput,
  ListAppInstanceUserEndpointsCommandOutput,
} from "../commands/ListAppInstanceUserEndpointsCommand";
import { ChimeSDKIdentityPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListAppInstanceUserEndpoints: (
  config: ChimeSDKIdentityPaginationConfiguration,
  input: ListAppInstanceUserEndpointsCommandInput,
  ...rest: any[]
) => Paginator<ListAppInstanceUserEndpointsCommandOutput> = createPaginator<
  ChimeSDKIdentityPaginationConfiguration,
  ListAppInstanceUserEndpointsCommandInput,
  ListAppInstanceUserEndpointsCommandOutput
>(ChimeSDKIdentityClient, ListAppInstanceUserEndpointsCommand, "NextToken", "NextToken", "MaxResults");
