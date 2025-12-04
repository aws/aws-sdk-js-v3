// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  GetSpotPlacementScoresCommand,
  GetSpotPlacementScoresCommandInput,
  GetSpotPlacementScoresCommandOutput,
} from "../commands/GetSpotPlacementScoresCommand";
import { EC2Client } from "../EC2Client";
import { EC2PaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateGetSpotPlacementScores: (
  config: EC2PaginationConfiguration,
  input: GetSpotPlacementScoresCommandInput,
  ...rest: any[]
) => Paginator<GetSpotPlacementScoresCommandOutput> = createPaginator<
  EC2PaginationConfiguration,
  GetSpotPlacementScoresCommandInput,
  GetSpotPlacementScoresCommandOutput
>(EC2Client, GetSpotPlacementScoresCommand, "NextToken", "NextToken", "MaxResults");
