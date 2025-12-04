// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListDevicesJobsCommand,
  ListDevicesJobsCommandInput,
  ListDevicesJobsCommandOutput,
} from "../commands/ListDevicesJobsCommand";
import { PanoramaClient } from "../PanoramaClient";
import { PanoramaPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListDevicesJobs: (
  config: PanoramaPaginationConfiguration,
  input: ListDevicesJobsCommandInput,
  ...rest: any[]
) => Paginator<ListDevicesJobsCommandOutput> = createPaginator<
  PanoramaPaginationConfiguration,
  ListDevicesJobsCommandInput,
  ListDevicesJobsCommandOutput
>(PanoramaClient, ListDevicesJobsCommand, "NextToken", "NextToken", "MaxResults");
