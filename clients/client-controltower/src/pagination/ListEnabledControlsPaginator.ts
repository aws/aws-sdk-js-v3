// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListEnabledControlsCommand,
  ListEnabledControlsCommandInput,
  ListEnabledControlsCommandOutput,
} from "../commands/ListEnabledControlsCommand";
import { ControlTowerClient } from "../ControlTowerClient";
import { ControlTowerPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListEnabledControls: (
  config: ControlTowerPaginationConfiguration,
  input: ListEnabledControlsCommandInput,
  ...rest: any[]
) => Paginator<ListEnabledControlsCommandOutput> = createPaginator<
  ControlTowerPaginationConfiguration,
  ListEnabledControlsCommandInput,
  ListEnabledControlsCommandOutput
>(ControlTowerClient, ListEnabledControlsCommand, "nextToken", "nextToken", "maxResults");
