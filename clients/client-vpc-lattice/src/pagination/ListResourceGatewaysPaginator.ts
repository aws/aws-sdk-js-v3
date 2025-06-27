// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import { Paginator } from "@smithy/types";

import {
  ListResourceGatewaysCommand,
  ListResourceGatewaysCommandInput,
  ListResourceGatewaysCommandOutput,
} from "../commands/ListResourceGatewaysCommand";
import { VPCLatticeClient } from "../VPCLatticeClient";
import { VPCLatticePaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListResourceGateways: (
  config: VPCLatticePaginationConfiguration,
  input: ListResourceGatewaysCommandInput,
  ...rest: any[]
) => Paginator<ListResourceGatewaysCommandOutput> = createPaginator<
  VPCLatticePaginationConfiguration,
  ListResourceGatewaysCommandInput,
  ListResourceGatewaysCommandOutput
>(VPCLatticeClient, ListResourceGatewaysCommand, "nextToken", "nextToken", "maxResults");
