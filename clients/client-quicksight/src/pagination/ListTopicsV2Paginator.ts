// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListTopicsV2Command,
  ListTopicsV2CommandInput,
  ListTopicsV2CommandOutput,
} from "../commands/ListTopicsV2Command";
import { QuickSightClient } from "../QuickSightClient";
import type { QuickSightPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListTopicsV2: (
  config: QuickSightPaginationConfiguration,
  input: ListTopicsV2CommandInput,
  ...rest: any[]
) => Paginator<ListTopicsV2CommandOutput> = createPaginator<
  QuickSightPaginationConfiguration,
  ListTopicsV2CommandInput,
  ListTopicsV2CommandOutput
>(QuickSightClient, ListTopicsV2Command, "NextToken", "NextToken", "MaxResults");
