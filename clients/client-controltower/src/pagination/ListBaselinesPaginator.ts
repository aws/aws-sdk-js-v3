// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListBaselinesCommand,
  ListBaselinesCommandInput,
  ListBaselinesCommandOutput,
} from "../commands/ListBaselinesCommand";
import { ControlTowerClient } from "../ControlTowerClient";
import { ControlTowerPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListBaselines: (
  config: ControlTowerPaginationConfiguration,
  input: ListBaselinesCommandInput,
  ...rest: any[]
) => Paginator<ListBaselinesCommandOutput> = createPaginator<
  ControlTowerPaginationConfiguration,
  ListBaselinesCommandInput,
  ListBaselinesCommandOutput
>(ControlTowerClient, ListBaselinesCommand, "nextToken", "nextToken", "maxResults");
