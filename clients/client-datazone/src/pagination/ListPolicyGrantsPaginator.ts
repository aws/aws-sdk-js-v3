// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListPolicyGrantsCommand,
  ListPolicyGrantsCommandInput,
  ListPolicyGrantsCommandOutput,
} from "../commands/ListPolicyGrantsCommand";
import { DataZoneClient } from "../DataZoneClient";
import { DataZonePaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListPolicyGrants: (
  config: DataZonePaginationConfiguration,
  input: ListPolicyGrantsCommandInput,
  ...rest: any[]
) => Paginator<ListPolicyGrantsCommandOutput> = createPaginator<
  DataZonePaginationConfiguration,
  ListPolicyGrantsCommandInput,
  ListPolicyGrantsCommandOutput
>(DataZoneClient, ListPolicyGrantsCommand, "nextToken", "nextToken", "maxResults");
