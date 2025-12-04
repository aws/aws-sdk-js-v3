// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListPlatformBranchesCommand,
  ListPlatformBranchesCommandInput,
  ListPlatformBranchesCommandOutput,
} from "../commands/ListPlatformBranchesCommand";
import { ElasticBeanstalkClient } from "../ElasticBeanstalkClient";
import { ElasticBeanstalkPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListPlatformBranches: (
  config: ElasticBeanstalkPaginationConfiguration,
  input: ListPlatformBranchesCommandInput,
  ...rest: any[]
) => Paginator<ListPlatformBranchesCommandOutput> = createPaginator<
  ElasticBeanstalkPaginationConfiguration,
  ListPlatformBranchesCommandInput,
  ListPlatformBranchesCommandOutput
>(ElasticBeanstalkClient, ListPlatformBranchesCommand, "NextToken", "NextToken", "MaxRecords");
