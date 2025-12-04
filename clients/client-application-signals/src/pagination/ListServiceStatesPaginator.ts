// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import { ApplicationSignalsClient } from "../ApplicationSignalsClient";
import {
  ListServiceStatesCommand,
  ListServiceStatesCommandInput,
  ListServiceStatesCommandOutput,
} from "../commands/ListServiceStatesCommand";
import { ApplicationSignalsPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListServiceStates: (
  config: ApplicationSignalsPaginationConfiguration,
  input: ListServiceStatesCommandInput,
  ...rest: any[]
) => Paginator<ListServiceStatesCommandOutput> = createPaginator<
  ApplicationSignalsPaginationConfiguration,
  ListServiceStatesCommandInput,
  ListServiceStatesCommandOutput
>(ApplicationSignalsClient, ListServiceStatesCommand, "NextToken", "NextToken", "MaxResults");
