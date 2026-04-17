// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListAntennasCommand,
  ListAntennasCommandInput,
  ListAntennasCommandOutput,
} from "../commands/ListAntennasCommand";
import { GroundStationClient } from "../GroundStationClient";
import type { GroundStationPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListAntennas: (
  config: GroundStationPaginationConfiguration,
  input: ListAntennasCommandInput,
  ...rest: any[]
) => Paginator<ListAntennasCommandOutput> = createPaginator<
  GroundStationPaginationConfiguration,
  ListAntennasCommandInput,
  ListAntennasCommandOutput
>(GroundStationClient, ListAntennasCommand, "nextToken", "nextToken", "maxResults");
