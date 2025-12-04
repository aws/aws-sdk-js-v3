// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListInstancesCommand,
  ListInstancesCommandInput,
  ListInstancesCommandOutput,
} from "../commands/ListInstancesCommand";
import { EMRClient } from "../EMRClient";
import { EMRPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListInstances: (
  config: EMRPaginationConfiguration,
  input: ListInstancesCommandInput,
  ...rest: any[]
) => Paginator<ListInstancesCommandOutput> = createPaginator<
  EMRPaginationConfiguration,
  ListInstancesCommandInput,
  ListInstancesCommandOutput
>(EMRClient, ListInstancesCommand, "Marker", "Marker", "");
