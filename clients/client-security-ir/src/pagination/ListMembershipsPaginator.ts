// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListMembershipsCommand,
  ListMembershipsCommandInput,
  ListMembershipsCommandOutput,
} from "../commands/ListMembershipsCommand";
import { SecurityIRClient } from "../SecurityIRClient";
import { SecurityIRPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListMemberships: (
  config: SecurityIRPaginationConfiguration,
  input: ListMembershipsCommandInput,
  ...rest: any[]
) => Paginator<ListMembershipsCommandOutput> = createPaginator<
  SecurityIRPaginationConfiguration,
  ListMembershipsCommandInput,
  ListMembershipsCommandOutput
>(SecurityIRClient, ListMembershipsCommand, "nextToken", "nextToken", "maxResults");
