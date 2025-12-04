// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListSimulationsCommand,
  ListSimulationsCommandInput,
  ListSimulationsCommandOutput,
} from "../commands/ListSimulationsCommand";
import { SimSpaceWeaverClient } from "../SimSpaceWeaverClient";
import { SimSpaceWeaverPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListSimulations: (
  config: SimSpaceWeaverPaginationConfiguration,
  input: ListSimulationsCommandInput,
  ...rest: any[]
) => Paginator<ListSimulationsCommandOutput> = createPaginator<
  SimSpaceWeaverPaginationConfiguration,
  ListSimulationsCommandInput,
  ListSimulationsCommandOutput
>(SimSpaceWeaverClient, ListSimulationsCommand, "NextToken", "NextToken", "MaxResults");
