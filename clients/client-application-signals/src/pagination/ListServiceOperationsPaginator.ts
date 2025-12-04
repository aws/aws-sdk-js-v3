// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import { ApplicationSignalsClient } from "../ApplicationSignalsClient";
import {
  ListServiceOperationsCommand,
  ListServiceOperationsCommandInput,
  ListServiceOperationsCommandOutput,
} from "../commands/ListServiceOperationsCommand";
import { ApplicationSignalsPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListServiceOperations: (
  config: ApplicationSignalsPaginationConfiguration,
  input: ListServiceOperationsCommandInput,
  ...rest: any[]
) => Paginator<ListServiceOperationsCommandOutput> = createPaginator<
  ApplicationSignalsPaginationConfiguration,
  ListServiceOperationsCommandInput,
  ListServiceOperationsCommandOutput
>(ApplicationSignalsClient, ListServiceOperationsCommand, "NextToken", "NextToken", "MaxResults");
