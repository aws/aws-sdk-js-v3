// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListAvailableResourceDimensionsCommand,
  ListAvailableResourceDimensionsCommandInput,
  ListAvailableResourceDimensionsCommandOutput,
} from "../commands/ListAvailableResourceDimensionsCommand";
import { PIClient } from "../PIClient";
import { PIPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListAvailableResourceDimensions: (
  config: PIPaginationConfiguration,
  input: ListAvailableResourceDimensionsCommandInput,
  ...rest: any[]
) => Paginator<ListAvailableResourceDimensionsCommandOutput> = createPaginator<
  PIPaginationConfiguration,
  ListAvailableResourceDimensionsCommandInput,
  ListAvailableResourceDimensionsCommandOutput
>(PIClient, ListAvailableResourceDimensionsCommand, "NextToken", "NextToken", "MaxResults");
