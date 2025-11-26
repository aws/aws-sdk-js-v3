// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import { CloudWatchLogsClient } from "../CloudWatchLogsClient";
import {
  DescribeConfigurationTemplatesCommand,
  DescribeConfigurationTemplatesCommandInput,
  DescribeConfigurationTemplatesCommandOutput,
} from "../commands/DescribeConfigurationTemplatesCommand";
import { CloudWatchLogsPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateDescribeConfigurationTemplates: (
  config: CloudWatchLogsPaginationConfiguration,
  input: DescribeConfigurationTemplatesCommandInput,
  ...rest: any[]
) => Paginator<DescribeConfigurationTemplatesCommandOutput> = createPaginator<
  CloudWatchLogsPaginationConfiguration,
  DescribeConfigurationTemplatesCommandInput,
  DescribeConfigurationTemplatesCommandOutput
>(CloudWatchLogsClient, DescribeConfigurationTemplatesCommand, "nextToken", "nextToken", "limit");
