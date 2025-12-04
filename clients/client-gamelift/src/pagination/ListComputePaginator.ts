// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import { ListComputeCommand, ListComputeCommandInput, ListComputeCommandOutput } from "../commands/ListComputeCommand";
import { GameLiftClient } from "../GameLiftClient";
import { GameLiftPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListCompute: (
  config: GameLiftPaginationConfiguration,
  input: ListComputeCommandInput,
  ...rest: any[]
) => Paginator<ListComputeCommandOutput> = createPaginator<
  GameLiftPaginationConfiguration,
  ListComputeCommandInput,
  ListComputeCommandOutput
>(GameLiftClient, ListComputeCommand, "NextToken", "NextToken", "Limit");
