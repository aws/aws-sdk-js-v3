// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import { ApplicationSignalsClient } from "../ApplicationSignalsClient";
import {
  ListServiceDependenciesCommand,
  ListServiceDependenciesCommandInput,
  ListServiceDependenciesCommandOutput,
} from "../commands/ListServiceDependenciesCommand";
import { ApplicationSignalsPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListServiceDependencies: (
  config: ApplicationSignalsPaginationConfiguration,
  input: ListServiceDependenciesCommandInput,
  ...rest: any[]
) => Paginator<ListServiceDependenciesCommandOutput> = createPaginator<
  ApplicationSignalsPaginationConfiguration,
  ListServiceDependenciesCommandInput,
  ListServiceDependenciesCommandOutput
>(ApplicationSignalsClient, ListServiceDependenciesCommand, "NextToken", "NextToken", "MaxResults");
