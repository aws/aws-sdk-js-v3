// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import { Paginator } from "@smithy/types";

import {
  ListFleetDeploymentsCommand,
  ListFleetDeploymentsCommandInput,
  ListFleetDeploymentsCommandOutput,
} from "../commands/ListFleetDeploymentsCommand";
import { GameLiftClient } from "../GameLiftClient";
import { GameLiftPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListFleetDeployments: (
  config: GameLiftPaginationConfiguration,
  input: ListFleetDeploymentsCommandInput,
  ...rest: any[]
) => Paginator<ListFleetDeploymentsCommandOutput> = createPaginator<
  GameLiftPaginationConfiguration,
  ListFleetDeploymentsCommandInput,
  ListFleetDeploymentsCommandOutput
>(GameLiftClient, ListFleetDeploymentsCommand, "NextToken", "NextToken", "Limit");
