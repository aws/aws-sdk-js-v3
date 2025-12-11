// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListApplicationInstanceNodeInstancesCommand,
  ListApplicationInstanceNodeInstancesCommandInput,
  ListApplicationInstanceNodeInstancesCommandOutput,
} from "../commands/ListApplicationInstanceNodeInstancesCommand";
import { PanoramaClient } from "../PanoramaClient";
import { PanoramaPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListApplicationInstanceNodeInstances: (
  config: PanoramaPaginationConfiguration,
  input: ListApplicationInstanceNodeInstancesCommandInput,
  ...rest: any[]
) => Paginator<ListApplicationInstanceNodeInstancesCommandOutput> = createPaginator<
  PanoramaPaginationConfiguration,
  ListApplicationInstanceNodeInstancesCommandInput,
  ListApplicationInstanceNodeInstancesCommandOutput
>(PanoramaClient, ListApplicationInstanceNodeInstancesCommand, "NextToken", "NextToken", "MaxResults");
