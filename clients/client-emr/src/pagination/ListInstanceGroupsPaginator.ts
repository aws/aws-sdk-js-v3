// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListInstanceGroupsCommand,
  ListInstanceGroupsCommandInput,
  ListInstanceGroupsCommandOutput,
} from "../commands/ListInstanceGroupsCommand";
import { EMRClient } from "../EMRClient";
import { EMRPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListInstanceGroups: (
  config: EMRPaginationConfiguration,
  input: ListInstanceGroupsCommandInput,
  ...rest: any[]
) => Paginator<ListInstanceGroupsCommandOutput> = createPaginator<
  EMRPaginationConfiguration,
  ListInstanceGroupsCommandInput,
  ListInstanceGroupsCommandOutput
>(EMRClient, ListInstanceGroupsCommand, "Marker", "Marker", "");
