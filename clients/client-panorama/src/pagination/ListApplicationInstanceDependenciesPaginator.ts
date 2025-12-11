// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListApplicationInstanceDependenciesCommand,
  ListApplicationInstanceDependenciesCommandInput,
  ListApplicationInstanceDependenciesCommandOutput,
} from "../commands/ListApplicationInstanceDependenciesCommand";
import { PanoramaClient } from "../PanoramaClient";
import { PanoramaPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListApplicationInstanceDependencies: (
  config: PanoramaPaginationConfiguration,
  input: ListApplicationInstanceDependenciesCommandInput,
  ...rest: any[]
) => Paginator<ListApplicationInstanceDependenciesCommandOutput> = createPaginator<
  PanoramaPaginationConfiguration,
  ListApplicationInstanceDependenciesCommandInput,
  ListApplicationInstanceDependenciesCommandOutput
>(PanoramaClient, ListApplicationInstanceDependenciesCommand, "NextToken", "NextToken", "MaxResults");
