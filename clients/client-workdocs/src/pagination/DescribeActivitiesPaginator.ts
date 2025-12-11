// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  DescribeActivitiesCommand,
  DescribeActivitiesCommandInput,
  DescribeActivitiesCommandOutput,
} from "../commands/DescribeActivitiesCommand";
import { WorkDocsClient } from "../WorkDocsClient";
import { WorkDocsPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateDescribeActivities: (
  config: WorkDocsPaginationConfiguration,
  input: DescribeActivitiesCommandInput,
  ...rest: any[]
) => Paginator<DescribeActivitiesCommandOutput> = createPaginator<
  WorkDocsPaginationConfiguration,
  DescribeActivitiesCommandInput,
  DescribeActivitiesCommandOutput
>(WorkDocsClient, DescribeActivitiesCommand, "Marker", "Marker", "Limit");
