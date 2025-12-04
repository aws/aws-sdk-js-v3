// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListApplicationInstancesCommand,
  ListApplicationInstancesCommandInput,
  ListApplicationInstancesCommandOutput,
} from "../commands/ListApplicationInstancesCommand";
import { PanoramaClient } from "../PanoramaClient";
import { PanoramaPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListApplicationInstances: (
  config: PanoramaPaginationConfiguration,
  input: ListApplicationInstancesCommandInput,
  ...rest: any[]
) => Paginator<ListApplicationInstancesCommandOutput> = createPaginator<
  PanoramaPaginationConfiguration,
  ListApplicationInstancesCommandInput,
  ListApplicationInstancesCommandOutput
>(PanoramaClient, ListApplicationInstancesCommand, "NextToken", "NextToken", "MaxResults");
