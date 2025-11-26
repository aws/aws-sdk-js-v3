// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListResourceConfigurationsCommand,
  ListResourceConfigurationsCommandInput,
  ListResourceConfigurationsCommandOutput,
} from "../commands/ListResourceConfigurationsCommand";
import { VPCLatticeClient } from "../VPCLatticeClient";
import { VPCLatticePaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListResourceConfigurations: (
  config: VPCLatticePaginationConfiguration,
  input: ListResourceConfigurationsCommandInput,
  ...rest: any[]
) => Paginator<ListResourceConfigurationsCommandOutput> = createPaginator<
  VPCLatticePaginationConfiguration,
  ListResourceConfigurationsCommandInput,
  ListResourceConfigurationsCommandOutput
>(VPCLatticeClient, ListResourceConfigurationsCommand, "nextToken", "nextToken", "maxResults");
