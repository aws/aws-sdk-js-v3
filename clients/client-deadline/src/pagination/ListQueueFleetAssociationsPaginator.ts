// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListQueueFleetAssociationsCommand,
  ListQueueFleetAssociationsCommandInput,
  ListQueueFleetAssociationsCommandOutput,
} from "../commands/ListQueueFleetAssociationsCommand";
import { DeadlineClient } from "../DeadlineClient";
import { DeadlinePaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListQueueFleetAssociations: (
  config: DeadlinePaginationConfiguration,
  input: ListQueueFleetAssociationsCommandInput,
  ...rest: any[]
) => Paginator<ListQueueFleetAssociationsCommandOutput> = createPaginator<
  DeadlinePaginationConfiguration,
  ListQueueFleetAssociationsCommandInput,
  ListQueueFleetAssociationsCommandOutput
>(DeadlineClient, ListQueueFleetAssociationsCommand, "nextToken", "nextToken", "maxResults");
