// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import { ListConfigsCommand, ListConfigsCommandInput, ListConfigsCommandOutput } from "../commands/ListConfigsCommand";
import { GroundStationClient } from "../GroundStationClient";
import { GroundStationPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListConfigs: (
  config: GroundStationPaginationConfiguration,
  input: ListConfigsCommandInput,
  ...rest: any[]
) => Paginator<ListConfigsCommandOutput> = createPaginator<
  GroundStationPaginationConfiguration,
  ListConfigsCommandInput,
  ListConfigsCommandOutput
>(GroundStationClient, ListConfigsCommand, "nextToken", "nextToken", "maxResults");
