// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListEphemeridesCommand,
  ListEphemeridesCommandInput,
  ListEphemeridesCommandOutput,
} from "../commands/ListEphemeridesCommand";
import { GroundStationClient } from "../GroundStationClient";
import { GroundStationPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListEphemerides: (
  config: GroundStationPaginationConfiguration,
  input: ListEphemeridesCommandInput,
  ...rest: any[]
) => Paginator<ListEphemeridesCommandOutput> = createPaginator<
  GroundStationPaginationConfiguration,
  ListEphemeridesCommandInput,
  ListEphemeridesCommandOutput
>(GroundStationClient, ListEphemeridesCommand, "nextToken", "nextToken", "maxResults");
