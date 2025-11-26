// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListInstanceFleetsCommand,
  ListInstanceFleetsCommandInput,
  ListInstanceFleetsCommandOutput,
} from "../commands/ListInstanceFleetsCommand";
import { EMRClient } from "../EMRClient";
import { EMRPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListInstanceFleets: (
  config: EMRPaginationConfiguration,
  input: ListInstanceFleetsCommandInput,
  ...rest: any[]
) => Paginator<ListInstanceFleetsCommandOutput> = createPaginator<
  EMRPaginationConfiguration,
  ListInstanceFleetsCommandInput,
  ListInstanceFleetsCommandOutput
>(EMRClient, ListInstanceFleetsCommand, "Marker", "Marker", "");
