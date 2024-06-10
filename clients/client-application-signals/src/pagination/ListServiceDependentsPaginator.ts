// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import { Paginator } from "@smithy/types";

import { ApplicationSignalsClient } from "../ApplicationSignalsClient";
import {
  ListServiceDependentsCommand,
  ListServiceDependentsCommandInput,
  ListServiceDependentsCommandOutput,
} from "../commands/ListServiceDependentsCommand";
import { ApplicationSignalsPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListServiceDependents: (
  config: ApplicationSignalsPaginationConfiguration,
  input: ListServiceDependentsCommandInput,
  ...rest: any[]
) => Paginator<ListServiceDependentsCommandOutput> = createPaginator<
  ApplicationSignalsPaginationConfiguration,
  ListServiceDependentsCommandInput,
  ListServiceDependentsCommandOutput
>(ApplicationSignalsClient, ListServiceDependentsCommand, "NextToken", "NextToken", "MaxResults");
