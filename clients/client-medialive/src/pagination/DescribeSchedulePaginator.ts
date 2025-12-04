// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  DescribeScheduleCommand,
  DescribeScheduleCommandInput,
  DescribeScheduleCommandOutput,
} from "../commands/DescribeScheduleCommand";
import { MediaLiveClient } from "../MediaLiveClient";
import { MediaLivePaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateDescribeSchedule: (
  config: MediaLivePaginationConfiguration,
  input: DescribeScheduleCommandInput,
  ...rest: any[]
) => Paginator<DescribeScheduleCommandOutput> = createPaginator<
  MediaLivePaginationConfiguration,
  DescribeScheduleCommandInput,
  DescribeScheduleCommandOutput
>(MediaLiveClient, DescribeScheduleCommand, "NextToken", "NextToken", "MaxResults");
