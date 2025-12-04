// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListEnabledBaselinesCommand,
  ListEnabledBaselinesCommandInput,
  ListEnabledBaselinesCommandOutput,
} from "../commands/ListEnabledBaselinesCommand";
import { ControlTowerClient } from "../ControlTowerClient";
import { ControlTowerPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListEnabledBaselines: (
  config: ControlTowerPaginationConfiguration,
  input: ListEnabledBaselinesCommandInput,
  ...rest: any[]
) => Paginator<ListEnabledBaselinesCommandOutput> = createPaginator<
  ControlTowerPaginationConfiguration,
  ListEnabledBaselinesCommandInput,
  ListEnabledBaselinesCommandOutput
>(ControlTowerClient, ListEnabledBaselinesCommand, "nextToken", "nextToken", "maxResults");
