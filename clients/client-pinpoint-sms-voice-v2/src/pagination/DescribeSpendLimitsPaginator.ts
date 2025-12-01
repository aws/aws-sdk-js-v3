// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  DescribeSpendLimitsCommand,
  DescribeSpendLimitsCommandInput,
  DescribeSpendLimitsCommandOutput,
} from "../commands/DescribeSpendLimitsCommand";
import { PinpointSMSVoiceV2Client } from "../PinpointSMSVoiceV2Client";
import { PinpointSMSVoiceV2PaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateDescribeSpendLimits: (
  config: PinpointSMSVoiceV2PaginationConfiguration,
  input: DescribeSpendLimitsCommandInput,
  ...rest: any[]
) => Paginator<DescribeSpendLimitsCommandOutput> = createPaginator<
  PinpointSMSVoiceV2PaginationConfiguration,
  DescribeSpendLimitsCommandInput,
  DescribeSpendLimitsCommandOutput
>(PinpointSMSVoiceV2Client, DescribeSpendLimitsCommand, "NextToken", "NextToken", "MaxResults");
