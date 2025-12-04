// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  DescribeEventTypesCommand,
  DescribeEventTypesCommandInput,
  DescribeEventTypesCommandOutput,
} from "../commands/DescribeEventTypesCommand";
import { HealthClient } from "../HealthClient";
import { HealthPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateDescribeEventTypes: (
  config: HealthPaginationConfiguration,
  input: DescribeEventTypesCommandInput,
  ...rest: any[]
) => Paginator<DescribeEventTypesCommandOutput> = createPaginator<
  HealthPaginationConfiguration,
  DescribeEventTypesCommandInput,
  DescribeEventTypesCommandOutput
>(HealthClient, DescribeEventTypesCommand, "nextToken", "nextToken", "maxResults");
