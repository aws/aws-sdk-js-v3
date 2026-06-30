// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import { ACMClient } from "../ACMClient";
import {
  ListAcmeEndpointsCommand,
  ListAcmeEndpointsCommandInput,
  ListAcmeEndpointsCommandOutput,
} from "../commands/ListAcmeEndpointsCommand";
import type { ACMPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListAcmeEndpoints: (
  config: ACMPaginationConfiguration,
  input: ListAcmeEndpointsCommandInput,
  ...rest: any[]
) => Paginator<ListAcmeEndpointsCommandOutput> = createPaginator<
  ACMPaginationConfiguration,
  ListAcmeEndpointsCommandInput,
  ListAcmeEndpointsCommandOutput
>(ACMClient, ListAcmeEndpointsCommand, "NextToken", "NextToken", "MaxResults");
