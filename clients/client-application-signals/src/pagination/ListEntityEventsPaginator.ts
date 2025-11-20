// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import { Paginator } from "@smithy/types";

import { ApplicationSignalsClient } from "../ApplicationSignalsClient";
import {
  ListEntityEventsCommand,
  ListEntityEventsCommandInput,
  ListEntityEventsCommandOutput,
} from "../commands/ListEntityEventsCommand";
import { ApplicationSignalsPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListEntityEvents: (
  config: ApplicationSignalsPaginationConfiguration,
  input: ListEntityEventsCommandInput,
  ...rest: any[]
) => Paginator<ListEntityEventsCommandOutput> = createPaginator<
  ApplicationSignalsPaginationConfiguration,
  ListEntityEventsCommandInput,
  ListEntityEventsCommandOutput
>(ApplicationSignalsClient, ListEntityEventsCommand, "NextToken", "NextToken", "MaxResults");
