// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListPlatformVersionsCommand,
  ListPlatformVersionsCommandInput,
  ListPlatformVersionsCommandOutput,
} from "../commands/ListPlatformVersionsCommand";
import { ElasticBeanstalkClient } from "../ElasticBeanstalkClient";
import { ElasticBeanstalkPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListPlatformVersions: (
  config: ElasticBeanstalkPaginationConfiguration,
  input: ListPlatformVersionsCommandInput,
  ...rest: any[]
) => Paginator<ListPlatformVersionsCommandOutput> = createPaginator<
  ElasticBeanstalkPaginationConfiguration,
  ListPlatformVersionsCommandInput,
  ListPlatformVersionsCommandOutput
>(ElasticBeanstalkClient, ListPlatformVersionsCommand, "NextToken", "NextToken", "MaxRecords");
