// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  DescribeAccountLimitsCommand,
  DescribeAccountLimitsCommandInput,
  DescribeAccountLimitsCommandOutput,
} from "../commands/DescribeAccountLimitsCommand";
import { PinpointSMSVoiceV2Client } from "../PinpointSMSVoiceV2Client";
import { PinpointSMSVoiceV2PaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateDescribeAccountLimits: (
  config: PinpointSMSVoiceV2PaginationConfiguration,
  input: DescribeAccountLimitsCommandInput,
  ...rest: any[]
) => Paginator<DescribeAccountLimitsCommandOutput> = createPaginator<
  PinpointSMSVoiceV2PaginationConfiguration,
  DescribeAccountLimitsCommandInput,
  DescribeAccountLimitsCommandOutput
>(PinpointSMSVoiceV2Client, DescribeAccountLimitsCommand, "NextToken", "NextToken", "MaxResults");
