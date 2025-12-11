// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  DescribeEnvironmentManagedActionHistoryCommand,
  DescribeEnvironmentManagedActionHistoryCommandInput,
  DescribeEnvironmentManagedActionHistoryCommandOutput,
} from "../commands/DescribeEnvironmentManagedActionHistoryCommand";
import { ElasticBeanstalkClient } from "../ElasticBeanstalkClient";
import { ElasticBeanstalkPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateDescribeEnvironmentManagedActionHistory: (
  config: ElasticBeanstalkPaginationConfiguration,
  input: DescribeEnvironmentManagedActionHistoryCommandInput,
  ...rest: any[]
) => Paginator<DescribeEnvironmentManagedActionHistoryCommandOutput> = createPaginator<
  ElasticBeanstalkPaginationConfiguration,
  DescribeEnvironmentManagedActionHistoryCommandInput,
  DescribeEnvironmentManagedActionHistoryCommandOutput
>(ElasticBeanstalkClient, DescribeEnvironmentManagedActionHistoryCommand, "NextToken", "NextToken", "MaxItems");
